import { derived, writable, type Writable } from "svelte/store";

import type { STICKY_BOARD_PAGE } from "../types";

import DefaultPage__SvelteComponent_ from "../views/defaultPage.svelte";
import ErrorPage__SvelteComponent_ from "../views/errorPage.svelte";

export const page: Writable<STICKY_BOARD_PAGE> = writable('DEFAULT');
export const ViewComponent = derived(page,
  ($page) => {
    switch ($page) {
      case 'DEFAULT':
        return DefaultPage__SvelteComponent_;
      case 'ERROR':
        return ErrorPage__SvelteComponent_;
    }
  }
);