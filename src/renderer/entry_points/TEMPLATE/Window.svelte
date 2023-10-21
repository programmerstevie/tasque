<script lang="ts">
  import { ViewComponent } from './stores/page';
</script>

<svelte:component this="{$ViewComponent}" />

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
