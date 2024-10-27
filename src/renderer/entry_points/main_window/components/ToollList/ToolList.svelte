<script lang="ts">
  import ListEntry from './ListEntry.svelte';
  import type { ToolListEntryData } from '@api/types';

  export let tools: ToolListEntryData[] = [];
</script>

{#each tools as tool}
  <ListEntry {tool} />
{/each}
