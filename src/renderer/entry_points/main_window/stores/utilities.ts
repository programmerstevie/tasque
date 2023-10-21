import { readable } from 'svelte/store';
import {
  type UtilListEntryData,
  TasqueUtils,
  TasqueUtilColors,
} from '../lib/types';

export const utils = readable<UtilListEntryData[]>([
  {
    util_name: TasqueUtils.STICKY_BOARD,
    title: 'Task Manager Project Ideas',
    date_created: {
      date: 12,
      month: 5,
      year: 2023,
    },
    color: TasqueUtilColors.YELLOW,
    urgent: 0,
  },
  {
    util_name: TasqueUtils.TASQUE_LIST,
    title: "Today's To-Do",
    date_created: {
      date: 29,
      month: 9,
      year: 2023,
    },
    color: TasqueUtilColors.MAGENTA,
    urgent: 1,
  },
  {
    util_name: TasqueUtils.TASQUE_LIST,
    title: 'This Month To-Do',
    date_created: {
      date: 20,
      month: 9,
      year: 2023,
    },
    color: TasqueUtilColors.CYAN,
    urgent: 27,
  },
]);
