import { type TasqueDate, TasqueTool, TasqueToolColor } from '@api/types';
import { BrowserWindow } from 'electron';


export interface ToolData {
  tool_name: TasqueTool;
  title: string;
  date_created: TasqueDate;
  color: TasqueToolColor;
  urgent: number;
  id: number;
};

export class ToolInfo__StickyBoard implements ToolData {
  tool_name = TasqueTool.STICKY_BOARD;
  title: string;
  date_created: TasqueDate;
  color = TasqueToolColor.NONE;
  urgent = 0;
  id = -1;


  constructor(title: string, date_created: TasqueDate) {
    this.title = title;
    this.date_created = date_created;
  }
}

export class Tool {
  info: ToolData | null = null;
  window: BrowserWindow | null = null;

  constructor() {}
}

export const NEW_UTILS: ToolData[] = [
  {
    tool_name: TasqueTool.STICKY_BOARD,
    title: 'Task Manager Project Ideas',
    date_created: {
      date: 12,
      month: 5,
      year: 2023,
    },
    color: TasqueToolColor.YELLOW,
    urgent: 0,
    id: 0,
  },
  {
    tool_name: TasqueTool.TASQUE_LIST,
    title: "Today's To-Do",
    date_created: {
      date: 29,
      month: 9,
      year: 2023,
    },
    color: TasqueToolColor.MAGENTA,
    urgent: 1,
    id: 1,
  },
  {
    tool_name: TasqueTool.TASQUE_LIST,
    title: 'This Month To-Do',
    date_created: {
      date: 20,
      month: 9,
      year: 2023,
    },
    color: TasqueToolColor.CYAN,
    urgent: 27,
    id: 2,
  },
];