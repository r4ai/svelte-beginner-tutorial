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

<div>
  <input type="checkbox" bind:checked={done} />
  <span style={`text-decoration: ${done ? "line-through" : "none"};`}>
    {title}
  </span>
</div>
