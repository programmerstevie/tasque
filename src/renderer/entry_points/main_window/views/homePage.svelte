<script lang="ts">
</script>

<div class="window">
  <header>
    <button>Add</button>
    <button on:click={() => window.api.closeWindow()}>Exit</button>
  </header>

  <main />
</div>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-app-region: drag;
  }
  button {
    -webkit-app-region: no-drag;
  }
  .window {
    widows: 100%;
    height: 100%;
    // border-radius: 10px;
    background: linear-gradient(180deg, #202020 0%, #3a3a3a 100%);
  }
</style>
