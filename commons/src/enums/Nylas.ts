export enum AccountOrganizationUnit {
  Label = "label",
  Folder = "folder",
}

export enum AccountSyncState {
  RUNNING = "running",
  PARTIAL = "partial",
  STOPPED = "stopped",
}

export enum MailboxActions {
  SELECTALL = "selectall",
  DELETE = "delete",
  STAR = "star",
  UNREAD = "unread",
}

export enum ComponentType {
  AGENDA,
  AVAILABILITY,
  COMPOSER,
  CONTACT_LIST,
  CONVERSATION,
  EMAIL,
  MAILBOX,
  SCHEDULE_EDITOR,
  SCHEDULER,
}
