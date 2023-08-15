<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import type { Todo } from "./store";

  export let todos: Todo[];
</script>

<div class="todoList">
  <h3>未完了</h3>
  {#each todos.filter((todo) => !todo.done) as todo}
    <TodoItem title={todo.title} done={todo.done} />
  {/each}

  <h3>完了済み</h3>
  {#each todos.filter((todo) => todo.done) as todo}
    <TodoItem title={todo.title} done={todo.done} />
  {/each}
</div>

<style>
  h3 {
    margin-top: 1rem;
  }
</style>
