<script lang="ts">
  import NavBar from "./lib/NavBar.svelte";
  import TodoList from "./lib/TodoList.svelte";
  import { todos, type Todo, saveTodos, loadTodos } from "./lib/store";
  import { onDestroy, onMount } from "svelte";

  let newTodoTitle = "";
  let unsubscripbeSync: () => void;

  const handleSubmit = (event: SubmitEvent) => {
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
    unsubscripbeSync = todos.subscribe((t) => {
      saveTodos(t);
    });
  });

  onDestroy(unsubscripbeSync);
</script>

<NavBar />
<main
  class="flex w-full max-w-xl grow flex-col space-y-4 self-center overflow-y-hidden p-4"
>
  <h2 class="text-2xl font-black">ToDo List</h2>
  <TodoList todos={$todos} class="grow overflow-y-auto" />
  <form on:submit={handleSubmit} class="flex flex-row gap-4">
    <input
      type="text"
      placeholder="Add a new ToDo"
      bind:value={newTodoTitle}
      class="input input-bordered grow"
    />
    <button class="btn btn-outline">Add</button>
  </form>
</main>
