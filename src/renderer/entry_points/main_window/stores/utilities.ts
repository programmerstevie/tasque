import { writable } from 'svelte/store';
import {
  type ToolListEntryData,
} from '@api/types';

export const tools = writable<ToolListEntryData[]>([]);
