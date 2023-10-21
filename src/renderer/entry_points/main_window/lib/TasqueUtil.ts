import tasque_list_svg from 'renderResources/icons/Tasque List Icon.svg';
import sticky_board_svg from 'renderResources/icons/StickyBoard Icon.svg';
const journal_entry_svg = '<svg></svg>';

import { TasqueUtilColors, TasqueUtils, type TasqueDate } from './types';

export const TasqueUtilColorMap = {
  [TasqueUtilColors.NONE]: null,
  [TasqueUtilColors.YELLOW]: '#DBCC4B',
  [TasqueUtilColors.RED_ORANGE]: '#DB4B4B',
  [TasqueUtilColors.CYAN]: '#4BA7DB',
  [TasqueUtilColors.MAGENTA]: '#DB4BCC',
  [TasqueUtilColors.GREEN]: '#72C964',
};

export const TasqueUtilSVGMap = {
  [TasqueUtils.TASQUE_LIST]: tasque_list_svg,
  [TasqueUtils.STICKY_BOARD]: sticky_board_svg,
  [TasqueUtils.JOURNAL_ENTRY]: journal_entry_svg,
};

export const TasqueUtilNameMap = {
  [TasqueUtils.TASQUE_LIST]: 'Tasque List',
  [TasqueUtils.STICKY_BOARD]: 'Sticky Board',
  [TasqueUtils.JOURNAL_ENTRY]: 'Journal Entry',
};

export function date_to_string(date: TasqueDate): string {
  const { date: day, month, year } = date;
  return `${month}/${day}/${year}`;
}
