<script lang="ts">
  import TodoItem from "./TodoItem.svelte";
  import type { Todo } from "./store";

  export let todos: Todo[];
</script>

<div class="space-y-2">
  <h3 class="font-bold">未完了</h3>
  <div class="flex flex-col gap-2">
    {#each todos.filter((todo) => !todo.done) as todo}
      <TodoItem title={todo.title} done={todo.done} />
    {/each}
  </div>

  <h3 class="font-bold mt-4">完了済み</h3>
  <div class="flex flex-col gap-2">
    {#each todos.filter((todo) => todo.done) as todo}
      <TodoItem title={todo.title} done={todo.done} />
    {/each}
  </div>
</div>
