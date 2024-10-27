<script lang="ts">
  import WindowHeader from '../components/WindowHeader/windowHeader.svelte';
  import ToolList from '../components/ToolList/ToolList.svelte';

  import SearchBar from '../components/searchBar.svelte';
  import type { ToolListEntryData } from '@api/types';
  import { onMount } from 'svelte';

  let tools: ToolListEntryData[] = [];

  onMount(async () => {
    tools = await window.TASQUE.MAIN_API.getTools();
  });
</script>

<div class="window">
  <WindowHeader />
  <main>
    <h1>Tasque</h1>
    <section class="searchBar">
      <SearchBar />
    </section>
    <section class="tools">
      <ToolList tools={tools} />
    </section>
  </main>
</div>

<style lang="scss">
  .window {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(180deg, #202020 0%, #3a3a3a 100%);

    main {
      padding-left: 10px;
      padding-right: 10px;
      overflow-y: auto;
      height: calc(100vh - 49px);
      scrollbar-color: #202020 #000000;
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgb(71, 71, 71);
        outline: 1px solid rgb(37, 37, 37);
        border-radius: 3px;
      }

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
        align-items: stretch;
        margin-top: 20px;
        // background-color: red;
      }
    }
  }
</style>
