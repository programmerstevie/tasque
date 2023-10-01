<script lang="ts">
  export let title: string = "";
  export let description: string = "";
  export let checked: boolean = false;
  export const priority: 'Least Concern' | 'Normal Concern' | 'High Concern' = 'Least Concern';
</script>

<div>
  <h1>{title}</h1>
  <div class="flex p-3">
    <div class={`h-3 w-3 ${checked? 'bg-green-400' : 'bg-red-400'}`}> </div>
    <div class="inline-block self-end">{description}</div>
  </div>
</div>