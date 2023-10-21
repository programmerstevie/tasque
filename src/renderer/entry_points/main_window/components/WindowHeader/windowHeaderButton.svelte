<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from 'svelte-icon/Icon.svelte';

  export let data: string;
  export let size: string;
  export let fill: string | null = null;

  const dispatch = createEventDispatcher();
</script>

<button
  class="button"
  on:click="{() => {
    dispatch('click');
  }}"
>
  {#if fill === null}
    <Icon {data} {size} />
  {:else}
    <Icon {data} {size} {fill} />
  {/if}
</button>

<style lang="scss">
  .button {
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
</style>
