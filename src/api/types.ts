import type { ToolData } from "src/main/tools";

export enum TasqueTool {
  TASQUE_LIST = 'TASQUE_LIST',
  STICKY_BOARD = 'STICKY_BOARD',
  JOURNAL_ENTRY = 'JOURNAL_ENTRY',
}

export enum TasqueToolColor {
  YELLOW = 'YELLOW',
  RED_ORANGE = 'RED_ORANGE',
  MAGENTA = 'MAGENTA',
  CYAN = 'CYAN',
  GREEN = 'GREEN',
  NONE = 'NONE',
}

export type TasqueDate = {
  date: number;
  month: number;
  year: number;
};

export type ToolListEntryData = ToolData;