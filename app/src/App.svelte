<script lang="ts">
  import TodoList from "./lib/TodoList.svelte";
  import { todos, type Todo, saveTodos, loadTodos } from "./lib/store";
  import { onMount } from "svelte";

  let newTodoTitle = "";

  let handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    const newTodo: Todo = {
      title: newTodoTitle,
      done: false,
    };
    todos.add(newTodo);
    newTodoTitle = "";
  };

  // * 初回読み込み時に、localStorageからtodoListを取得する
  onMount(() => {
    $todos = loadTodos();
  });

  // * todoListを永続的に保存するために、localStorageに保存する
  $: saveTodos($todos);
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
