<script lang="ts">
  import WindowHeader from '../components/WindowHeader/windowHeader.svelte';

  import SearchBar from '../components/searchBar.svelte';
</script>

<div class="window">
  <WindowHeader />
  <main>
    <h1>Tasque</h1>
    <section class="searchBar">
      <SearchBar />
    </section>
    <section class="tools"></section>
  </main>
</div>

<style lang="scss">
  .window {
    widows: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(180deg, #202020 0%, #3a3a3a 100%);

    main {
      padding-left: 10px;
      padding-right: 10px;
      h1 {
        color: #e6e6e6;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 2.4px;
        text-align: center;
      }

      .searchBar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
      }

      .tools {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
      }
    }
  }
</style>
