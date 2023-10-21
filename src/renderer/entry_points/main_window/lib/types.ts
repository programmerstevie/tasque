export enum TasqueUtils {
  TASQUE_LIST = 'TASQUE_LIST',
  STICKY_BOARD = 'STICKY_BOARD',
  JOURNAL_ENTRY = 'JOURNAL_ENTRY',
}

export enum TasqueUtilColors {
  YELLOW = 'YELLOW',
  RED_ORANGE = 'RED_ORANGE',
  MAGENTA = 'MAGENTA',
  CYAN = 'CYAN',
  GREEN = 'GREEN',
  NONE = 'NONE',
}

export type UtilListEntryData = {
  util_name: TasqueUtils;
  title: string;
  date_created: TasqueDate;
  color: TasqueUtilColors;
  urgent: number;
};

export type TasqueDate = {
  date: number;
  month: number;
  year: number;
};
