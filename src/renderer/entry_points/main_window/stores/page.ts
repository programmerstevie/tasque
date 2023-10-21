import { derived, writable, type Writable, type Readable } from 'svelte/store';
import type { ComponentType } from 'svelte';

import type { TM_Page } from '../types';

import HomePage__SvelteComponent_ from '../views/homePage.svelte';
import ErrorPage__SvelteComponent_ from '../views/errorPage.svelte';

export const page: Writable<TM_Page> = writable('HOME');
export const ViewComponent: Readable<ComponentType> = derived(page, ($page) => {
  switch ($page) {
    case 'HOME':
      return HomePage__SvelteComponent_;
    default:
      return ErrorPage__SvelteComponent_;
  }
});
