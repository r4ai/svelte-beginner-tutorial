<script lang="ts">
  import TodoList from "./lib/TodoList.svelte";
  import type { Todo } from "./lib/utils";

  let todos: Todo[] = [
    { title: "計算機概論 課題" },
    { title: "計算機科学基礎実験 レポート" },
    { title: "プログラム言語 レポート" },
  ];
</script>

<main>
  <h2>ToDo List</h2>
  <TodoList {todos} />
  <form>
    <input type="text" placeholder="Add a new ToDo" />
    <button>Add</button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin: 1rem;
  }
</style>
