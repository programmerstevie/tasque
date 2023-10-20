<script lang="ts">
  import Icon from 'svelte-icon/Icon.svelte';
  import searchIcon from '../../../resources/icons/Magnifying Glass.svg';
  let input: string = '';
</script>

<div class="searchBar">
  {#if input === ''}
    <div class="searchBar__placeHolder">
      <span>Search...</span>
    </div>
  {/if}
  <input class="searchBar__input" bind:value={input} />
  <button
    ><Icon
      data={searchIcon}
      fill="none"
      stroke="#838383"
      size="17px"
    /></button
  >
</div>

<style lang="scss">
  button {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #d9d9d910;
    }

    &:active {
      background-color: #d9d9d920;
    }
  }
  .searchBar {
    font-family: Roboto;
    width: 100%;
    background-color: #454545;
    height: 30px;
    position: relative;
    display: flex;

    &__placeHolder {
      pointer-events: none;
      position: absolute;
      color: #838383;
      width: 100%;
      height: 100%;
      display: flex;

      span {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 8px 10px;
      }
    }

    &__input {
      display: inline-block;
      width: 100%;

      background-color: transparent;
      border: none;
      color: #e6e6e6;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding-left: 10px;
    }
  }
</style>
