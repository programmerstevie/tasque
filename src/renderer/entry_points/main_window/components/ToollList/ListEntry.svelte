<script lang="ts">
  import Icon from 'svelte-icon/Icon.svelte';
  import drag_region_svg from 'renderResources/icons/Grab Icon.svg';
  import urgent_svg from 'renderResources/icons/Urgent Icon.svg';
  import {
    TasqueToolColorMap,
    TasqueToolNameMap,
    TasqueToolSVGMap,
    date_to_string,
  } from '../../lib/TasqueTool';
  import type { ToolListEntryData } from '@api/types';

  export let tool: ToolListEntryData;
</script>

<button
  class="btn tool"
  on:click="{() => {
    // open the tool in a new window
    window.TASQUE.MAIN_API.openTool(tool.id);
  }}"
>
  <header
    style="background-color:{TasqueToolColorMap[tool.color] ?? 'none'}"
  ></header>
  <main>
    <div class="tool_icon">
      <Icon
        data="{TasqueToolSVGMap[tool.tool_name]}"
        fill="none"
        stroke="#838383"
        size="36px"
      />
    </div>
    <h1>{tool.title}</h1>
    <div class="drag_region">
      <Icon data="{drag_region_svg}" fill="#838383" stroke="none" size="18px" />
    </div>
  </main>
  <footer>
    <span class="toolname">{TasqueToolNameMap[tool.tool_name]}</span>
    <span class="datecreated">{date_to_string(tool.date_created)}</span>
  </footer>
  {#if tool.urgent}
    <div class="urgent">
      {#if tool.urgent > 1}
        <span>{tool.urgent}</span>
      {/if}
      <Icon data="{urgent_svg}" size="19px" stroke="none" />
    </div>
  {/if}
</button>

<style lang="scss">
  .tool {
    font-family: 'Space Mono';
    background-color: #454545;
    border-radius: 3px;
    height: 111px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    position: relative;

    header {
      height: 9px;
      margin-bottom: 21px;
    }

    main {
      display: flex;
      padding-left: 20px;
      justify-content: space-between;
      height: 60px;

      .tool_icon {
        display: flex;
        align-items: center;
      }

      h1 {
        color: white;
        font-size: 20px;
        font-weight: 400;
        max-width: 200px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: center;
      }

      .drag_region {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }

    footer {
      height: 25px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 400;
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
      color: #838383;
    }

    .urgent {
      position: absolute;
      right: 10px;
      top: 20px;
      display: flex;
      align-items: center;
      gap: 5px; // Add some spacing between the number and the icon

      span {
        color: #b64f4f;
        font-size: 14px;
      }
    }
  }
</style>
