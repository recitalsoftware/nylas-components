import type {
  Day,
  Manifest as AvailabilityManifest,
  SelectableSlot,
} from "@commons/types/Availability";
import type { Manifest } from "@commons/types/Nylas";
import { CalendarStore } from "@commons/store/calendars";
import { scaleTime } from "d3-scale";
import { timeWeek, timeDay, timeHour, timeMinute } from "d3-time";
import { generateDaySlots } from "./method/availabilityUtils";
import { AvailabilityStatus } from "@commons/enums/Availability";
import { arrayContainsArray } from "@commons/methods/component";

export interface DataHandler<T extends Manifest> {
  updateData: (state: T, dataKey: keyof T) => Promise<T>;
}

const MINIMUM_DAY_WIDTH = 100;
let state: AvailabilityManifest;

function getDatesToShow(): number {
  const optimalDatesToShow =
    Math.floor(state.containerWidth / MINIMUM_DAY_WIDTH) ?? 1;

  return optimalDatesToShow < state.dates_to_show || state.show_as_week
    ? optimalDatesToShow
    : state.dates_to_show;
}

function isTooSmallForWeek(): boolean {
  return (
    state.show_as_week &&
    Math.floor(state.containerWidth / MINIMUM_DAY_WIDTH) < 7
  );
}

function generateDayRange(
  startDay: Date,
  endDay: Date,
  reverse?: boolean,
): Date[] {
  const range = scaleTime()
    .domain([startDay, endDay])
    .ticks(timeDay)
    .filter((timestamp: Date) => {
      if (state.show_weekends) {
        return true;
      } else {
        return timestamp.getDay() !== 6 && timestamp.getDay() !== 0;
      }
    });

  console.log({ range });
  if (!state.show_as_week && !state.show_weekends) {
    if (range.length < getDatesToShow()) {
      if (reverse) {
        return generateDayRange(timeDay.offset(startDay, -1), endDay, true);
      }
      return generateDayRange(startDay, timeDay.offset(endDay, 1));
    }
  }
  return range;
}

function getDayRange(): Date[] {
  return generateDayRange(
    getStartDay(), // TODO: weird just to get show_weekends passed in
    state.show_as_week
      ? timeDay.offset(
          getStartDay(),
          isTooSmallForWeek() ? getDatesToShow() - 1 : 6,
        )
      : timeDay.offset(getStartDay(), getDatesToShow() - 1),
  );
}

function getStartDay(): Date {
  return state.show_as_week && !isTooSmallForWeek()
    ? timeWeek.floor(state.start_date)
    : timeDay.floor(state.start_date);
}

function getEndDay(): Date {
  const dayRange = getDayRange();

  return dayRange[dayRange.length - 1];
}

function checkOverbooked(slots: SelectableSlot[]) {
  for (const calendar of state.allCalendars) {
    let availableSlotsForCalendar = slots.filter((slot) =>
      slot.available_calendars.includes(calendar.account?.emailAddress),
    );
    if (
      slots.length - availableSlotsForCalendar.length >
      (state.overbooked_threshold * slots.length) / 100
    ) {
      availableSlotsForCalendar.forEach((slot) => {
        slot.available_calendars = slot.available_calendars.filter(
          (cal) => cal !== calendar.account?.emailAddress,
        );
        if (!slot.available_calendars.length) {
          // if it has no calendars available, it's busy
          slot.availability = AvailabilityStatus.BUSY;
        } else if (
          slot.availability === AvailabilityStatus.FREE &&
          slot.available_calendars.length !== state.allCalendars.length
        ) {
          // if it was previously free, but now lacks a calendar, it should be considered Partial.
          slot.availability = AvailabilityStatus.PARTIAL;
        }
      });
    }
  }

  return slots;
}

function getRequiredParticipants() {
  return [
    ...new Set([...state.required_participants, state.booking_user_email]),
  ];
}

// Consecutive same-availability periods of time, from earliest start_time to latest end_time.
function generateEpochs(slots: SelectableSlot[], partialBookableRatio: number) {
  const epochScale = scaleTime().domain([
    slots[0].start_time,
    slots[slots.length - 1].end_time,
  ]);
  let epochs = slots
    .reduce((epochList, slot) => {
      const prevEpoch = epochList[epochList.length - 1];
      // Edge case note: available_calendars is doing a stringified array compare,
      // which means if they're differently ordered but otherwise teh same, this will fail.
      if (
        prevEpoch &&
        JSON.stringify(prevEpoch[0].available_calendars) ===
          JSON.stringify(slot.available_calendars) &&
        prevEpoch[0].availability === slot.availability
      ) {
        prevEpoch.push(slot);
      } else {
        epochList.push([slot]);
      }
      return epochList;
    }, [] as SelectableSlot[][])
    .map((epoch) => {
      let status = "free";

      const numFreeCalendars = epoch[0].available_calendars.length;
      const fewerCalendarsThanRatio =
        numFreeCalendars !== state.allCalendars.length &&
        numFreeCalendars < state.allCalendars.length * partialBookableRatio;

      if (
        numFreeCalendars === 0 ||
        fewerCalendarsThanRatio ||
        (state.required_participants.length &&
          //Check if every participants is included in the available calendar
          !arrayContainsArray(
            getRequiredParticipants(),
            epoch[0].available_calendars,
          ))
      ) {
        if (epoch[0].availability === AvailabilityStatus.CLOSED) {
          status = "closed";
        } else {
          status = "busy";
        }
      } else if (
        numFreeCalendars > 0 &&
        numFreeCalendars < state.allCalendars.length
      ) {
        status = "partial";
      }

      return {
        start_time: epoch[0].start_time,
        offset: epochScale(epoch[0].start_time) * 100,
        status,
        height:
          (epochScale(epoch[epoch.length - 1].end_time) -
            epochScale(epoch[0].start_time)) *
          100,
        end_time: epoch[epoch.length - 1].end_time,
        slots: epoch.length,
        available_calendars: epoch[0].available_calendars,
      };
    });
  return epochs;
}

async function getDays(): Promise<Day[]> {
  // TODO: we probably dont want to expose a list of all a users calendars to the end-user here.
  const calendarsList = await CalendarStore.getCalendars({
    access_token: state.access_token,
    component_id: state.id,
    calendarIDs: [], // empty array will fetch all calendars
  });
  const calendarId = calendarsList?.find((cal) => cal.is_primary)?.id || "";

  return getDayRange().map((timestamp: Date) => {
    const slots = checkOverbooked(
      generateDaySlots(
        timestamp,
        state.allCalendars,
        calendarId,
        getRequiredParticipants(),
        state,
      ),
    );
    return {
      epochs: generateEpochs(slots, state.partial_bookable_ratio),
      slots,
      timestamp,
    };
  });
}

export class AvailabilityHandler implements DataHandler<AvailabilityManifest> {
  async updateData(
    currentState: AvailabilityManifest,
    dataKey: keyof AvailabilityManifest,
  ) {
    // Ensure internal state is immutable
    state = Object.freeze({ ...currentState });

    switch (dataKey) {
      case "days":
        currentState.days = await getDays();
    }

    return currentState;
  }
}
