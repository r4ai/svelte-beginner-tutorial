<script lang="ts">
  import TodoList from "./lib/TodoList.svelte";
  import { todos, type Todo } from "./lib/store";

  let newTodoTitle = "";

  let handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const newTodo: Todo = {
      title: newTodoTitle,
    };
    todos.add(newTodo);
    newTodoTitle = "";
  };
</script>

<main>
  <h2>ToDo List</h2>
  <TodoList todos={$todos} />
  <form on:submit={handleSubmit}>
    <input type="text" placeholder="Add a new ToDo" bind:value={newTodoTitle} />
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
