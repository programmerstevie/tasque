<script lang="ts">
  import add_icon from '../../../../resources/icons/Add Icon.svg';
  import exit_icon from '../../../../resources/icons/Exit Icon.svg';
  import settings_icon from '../../../../resources/icons/Settings Icon.svg';

  import WindowHeaderButton from './windowHeaderButton.svelte';
</script>

<header>
  <span>
    <WindowHeaderButton
      on:click="{() => {
        window.TASQUE.MAIN_API.consoleLog('ADD WAS CLICKED');
      }}"
      data="{add_icon}"
      size="27px"
    />
  </span>
  <div class="flex-h">
    <WindowHeaderButton
      on:click="{() => {
        window.TASQUE.MAIN_API.consoleLog('SETTINGS WAS CLICKED');
      }}"
      size="20px"
      fill="none"
      data="{settings_icon}"
    />
    <WindowHeaderButton
      on:click="{() => {
        window.TASQUE.WINDOW_ACTION_API.closeWindow();
      }}"
      data="{exit_icon}"
      size="18px"
    />
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-app-region: drag;
    // background-color: rgba(127, 255, 212, 0.062);
    height: 48px;
    * {
      -webkit-app-region: no-drag;
    }
  }
</style>
