<script lang="ts">
  import TodoList from "./lib/TodoList.svelte";
</script>

<main>
  <h2>ToDo List</h2>
  <TodoList />
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
