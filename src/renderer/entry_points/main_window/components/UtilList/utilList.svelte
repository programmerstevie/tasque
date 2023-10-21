<script lang="ts">
  import Icon from 'svelte-icon/Icon.svelte';

  import drag_region_svg from 'renderResources/icons/Grab Icon.svg';
  import urgent_svg from 'renderResources/icons/Urgent Icon.svg';

  import {
    TasqueUtilColorMap,
    TasqueUtilNameMap,
    TasqueUtilSVGMap,
    date_to_string,
  } from '../../lib/TasqueUtil';

  import { utils } from '../../stores/utilities';
</script>

{#each $utils as util}
  <div class="util">
    <header
      style="background-color:{TasqueUtilColorMap[util.color] ?? 'none'}"
    ></header>
    <main>
      <div class="util_icon">
        <Icon
          data="{TasqueUtilSVGMap[util.util_name]}"
          fill="none"
          stroke="#838383"
          size="36px"
        />
      </div>
      <h1>{util.title}</h1>
      <div class="drag_region">
        <Icon
          data="{drag_region_svg}"
          fill="#838383"
          stroke="none"
          size="18px"
        />
      </div>
    </main>
    <footer>
      <span class="utilname">{TasqueUtilNameMap[util.util_name]}</span>
      <span class="datecreated">{date_to_string(util.date_created)}</span>
    </footer>
    {#if util.urgent}
      <div class="urgent">
        {#if util.urgent > 1}
          <span>{util.urgent}</span>
        {/if}
        <Icon data="{urgent_svg}" size="19px" stroke="none" />
      </div>
    {/if}
  </div>
{/each}

<style lang="scss">
  .util {
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
      // background-color: aqua;
      padding-left: 20px;
      // padding-top: 10px;
      // padding-bottom: 10px;
      justify-content: space-between;
      height: 60px;
      // position: relative;

      .util_icon {
        // background-color: azure;
        display: flex;
        align-items: center;
      }

      h1 {
        // background-color: green;
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
        // background-color: red;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
    footer {
      height: 25px;
      // background-color: beige;
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
      // display: flex;

      span {
        color: #b64f4f;
        margin-left: 5px;
        font-size: 14px;
        padding-top: 2px;
        top: 0px;
        right: 22px;
        position: absolute;
      }
    }
  }
</style>
