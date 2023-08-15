<script lang="ts">
  import { todos } from "./store";

  export let title: string;
  export let done: boolean;

  $: {
    todos.edit(title, {
      title,
      done,
    });
  }
</script>

<div class="flex flex-row gap-2 px-4 py-3 items-center bg-base-200 rounded-xl">
  <input type="checkbox" bind:checked={done} class="checkbox" />
  <span class={done ? "line-through" : ""}>
    {title}
  </span>
</div>
