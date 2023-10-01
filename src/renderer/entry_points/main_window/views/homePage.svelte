<script lang="ts">
  import ListEntry from "../components/listEntry.svelte";
  // import Home from "./views/homePage.svelte";
  import Date_Utils from "renderLib/date/utils";

  let today: Date = new Date();

  let { day, month, date, year } = Date_Utils.getAll(today);

  let message_exists: boolean = true;
  
</script>

<header>
  <h1>Hello World!</h1>
  <p>
    Today is {day}&comma; {month}
    {date}&comma; {year}
  </p>
</header>

<main>
  <p hidden={!message_exists} class="steb">
    We're <em class="font-bold">DOING</em> it!
  </p>
  <div />
  <ListEntry title="Go To The Park" description="Go down the slide!" priority="High Concern"/>
  <button
    class="p-2 border-2 rounded shadow-md border-slate-400 bg-slate-200 hover:bg-slate-300"
    on:click={() => {
      message_exists = !message_exists;
    }}
  >
    make message {message_exists ? "disappear" : "reappear"}
  </button>
</main>

<style lang="scss">
  p.steb {
    color: red;

    em {
      color: blue;
    }
  }
</style>