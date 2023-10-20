<script lang="ts">
  import { ViewComponent } from './stores/page';
</script>

<svelte:head>
  <meta charset="utf-8" />
  <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"> -->
  <title>Getting Started</title>
</svelte:head>
<svelte:component this={$ViewComponent} />

<style global>
  @import "../../resources/global.css";
</style>
