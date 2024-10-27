import tasque_list_svg from 'renderResources/icons/Tasque List Icon.svg';
import sticky_board_svg from 'renderResources/icons/StickyBoard Icon.svg';
const journal_entry_svg = '<svg></svg>';

import { TasqueToolColor, TasqueTool, type TasqueDate } from '@api/types';

export const TasqueToolColorMap = {
  [TasqueToolColor.NONE]: null,
  [TasqueToolColor.YELLOW]: '#DBCC4B',
  [TasqueToolColor.RED_ORANGE]: '#DB4B4B',
  [TasqueToolColor.CYAN]: '#4BA7DB',
  [TasqueToolColor.MAGENTA]: '#DB4BCC',
  [TasqueToolColor.GREEN]: '#72C964',
};

export const TasqueToolSVGMap = {
  [TasqueTool.TASQUE_LIST]: tasque_list_svg,
  [TasqueTool.STICKY_BOARD]: sticky_board_svg,
  [TasqueTool.JOURNAL_ENTRY]: journal_entry_svg,
};

export const TasqueToolNameMap = {
  [TasqueTool.TASQUE_LIST]: 'Tasque List',
  [TasqueTool.STICKY_BOARD]: 'Sticky Board',
  [TasqueTool.JOURNAL_ENTRY]: 'Journal Entry',
};

export function date_to_string(date: TasqueDate): string {
  const { date: day, month, year } = date;
  return `${month}/${day}/${year}`;
}
