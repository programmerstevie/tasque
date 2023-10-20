<script lang="ts">
  import Icon from 'svelte-icon/Icon.svelte';
  import add_icon from '../../../resources/icons/Add Icon.svg';
  import exit_icon from '../../../resources/icons/Exit Icon.svg';
  import settings_icon from '../../../resources/icons/Settings Icon.svg';

  import SearchBar from '../components/searchBar.svelte';
</script>

<div class="window">
  <header class="windowHeader">
    <button
      class="windowHeader__button"
      on:click={() => {
        window.TASQUE.MAIN_API.consoleLog('ADD WAS CLICKED');
      }}
    >
      <Icon data={add_icon} size="27px" />
    </button>
    <div class="flex-h">
      <button
        class="windowHeader__button"
        on:click={() => {
          window.TASQUE.MAIN_API.consoleLog('SETTINGS WAS CLICKED');
        }}
      >
        <Icon data={settings_icon} size="20px" fill="none" />
      </button>
      <button
        class="windowHeader__button"
        on:click={() => {
          window.TASQUE.WINDOW_ACTION_API.closeWindow();
        }}
      >
        <Icon data={exit_icon} size="18px" />
      </button>
    </div>
  </header>

  <main>
    <h1>Tasque</h1>
    <section class="searchBar">
      <SearchBar />
    </section>
    <section class="tools" />
  </main>
</div>

<style lang="scss">
  .windowHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-app-region: drag;
    // background-color: rgba(127, 255, 212, 0.062);
    height: 48px;
    * {
      -webkit-app-region: no-drag;
    }
    &__button {
      width: 48px;
      height: 48px;
      border: none;
      background-color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #d9d9d910;
      }

      &:active {
        background-color: #d9d9d920;
      }
    }
  }
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
