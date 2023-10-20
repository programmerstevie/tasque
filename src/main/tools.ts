import { BrowserWindow } from 'electron';

export enum ToolType {
  STICKY_BOARD = 'STICKY_BOARD',
  TASQUE_LIST = 'TASQUE_LIST',
}

export type SimpleDate = {
  date: number;
  month: number;
  year: number;
};

export enum ToolColor {
  MAGENTA = 'MAGENTA',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
  GREEN = 'GREEN',
  CYAN = 'CYAN',
  NONE = 'NONE',
}

export interface ToolInfo {
  title: string;
  type: ToolType;
  date_created: SimpleDate;
  color: ToolColor;
}

export class ToolInfo__StickyBoard implements ToolInfo {
  type = ToolType.STICKY_BOARD;
  title: string;
  date_created: SimpleDate;
  color = ToolColor.NONE;

  constructor(title: string, date_created: SimpleDate) {
    this.title = title;
    this.date_created = date_created;
  }
}

export class Tool {
  info: ToolInfo | null = null;
  window: BrowserWindow | null = null;

  constructor() {}
}
