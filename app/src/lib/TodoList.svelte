<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import TodoItem from "./TodoItem.svelte";
  import type { Todo } from "./store";

  export let todos: Todo[];
</script>

<div class={twMerge("space-y-2", $$props.class)}>
  <h3 class="font-bold">未完了</h3>
  <div class="flex flex-col gap-2">
    {#each todos.filter((todo) => !todo.done) as todo}
      <TodoItem title={todo.title} done={todo.done} />
    {/each}
  </div>

  <h3 class="mt-4 font-bold">完了済み</h3>
  <div class="flex flex-col gap-2">
    {#each todos.filter((todo) => todo.done) as todo}
      <TodoItem title={todo.title} done={todo.done} />
    {/each}
  </div>
</div>
