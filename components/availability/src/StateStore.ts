import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Manifest } from "@commons/types/Nylas";
import { ComponentType } from "@commons/enums/Nylas";
import { AvailabilityHandler, DataHandler } from "./AvailabilityHandler";

const ComponentHandlerMap = {
  [ComponentType.AGENDA]: AvailabilityHandler,
  [ComponentType.AVAILABILITY]: AvailabilityHandler,
  [ComponentType.COMPOSER]: AvailabilityHandler,
  [ComponentType.CONTACT_LIST]: AvailabilityHandler,
  [ComponentType.CONVERSATION]: AvailabilityHandler,
  [ComponentType.EMAIL]: AvailabilityHandler,
  [ComponentType.MAILBOX]: AvailabilityHandler,
  [ComponentType.SCHEDULER]: AvailabilityHandler,
  [ComponentType.SCHEDULE_EDITOR]: AvailabilityHandler,
};

interface StateDescriptor<T extends Manifest> {
  state: T;
  dataHandler: DataHandler<T>;
}

function createStateStore<T extends Manifest>() {
  const { subscribe, set, update } = writable<
    Record<string, StateDescriptor<T>>
  >({});
  const stateMap = <Record<string, StateDescriptor<T>>>{};

  return {
    register: (initialState: T, componentType: ComponentType): string => {
      const registerId = uuid();
      const stateDescriptor: StateDescriptor<T> = {
        state: initialState,
        dataHandler: new ComponentHandlerMap[componentType](),
      };

      stateMap[registerId] = stateDescriptor;
      update((currentState) => {
        currentState[registerId] = stateDescriptor;
        return { ...currentState };
      });

      return registerId;
    },
    updateData: async (id: string, dataProp: keyof T, value?: any) => {
      if (!stateMap[id]) {
        console.error(
          "Component state not found. Have you registered the component?",
        );
        return;
      }

      const dataHandler = stateMap[id].dataHandler;
      const state = stateMap[id].state;

      if (value !== undefined) {
        stateMap[id].state = { ...state, [dataProp]: value };
      } else {
        stateMap[id].state = await dataHandler.updateData(state, dataProp);
      }
      update((currentState) => {
        currentState[id].state = { ...stateMap[id].state };
        return { ...currentState };
      });
      return stateMap[id].state[dataProp];
    },
    subscribe,
    reset: () => set({}),
  };
}

export const StateStore = createStateStore();
