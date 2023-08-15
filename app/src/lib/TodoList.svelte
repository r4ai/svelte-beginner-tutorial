<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import type { Todo } from "./store";

  export let todos: Todo[];
</script>

<div class="todoList">
  {#each todos as todo}
    <TodoItem title={todo.title} />
  {/each}
</div>
