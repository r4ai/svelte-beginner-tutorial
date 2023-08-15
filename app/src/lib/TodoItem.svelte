<script lang="ts">
  import { todos } from "./store";

  export let title: string;

  let isChecked = false;

  $: {
    todos.edit(title, {
      title,
      done: isChecked,
    });
  }
</script>

<div>
  <input type="checkbox" bind:checked={isChecked} />
  <span style={`text-decoration: ${isChecked ? "line-through" : "none"};`}>
    {title}
  </span>
</div>
