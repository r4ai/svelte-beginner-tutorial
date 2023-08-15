<script lang="ts">
  import NavBar from "./lib/NavBar.svelte";
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

<NavBar />
<main
  class="grow flex flex-col p-4 space-y-4 w-full max-w-xl self-center overflow-y-hidden"
>
  <h2 class="text-2xl font-black">ToDo List</h2>
  <TodoList todos={$todos} class="grow overflow-y-auto" />
  <form on:submit={handleSubmit} class="flex flex-row gap-4">
    <input
      type="text"
      placeholder="Add a new ToDo"
      bind:value={newTodoTitle}
      class="flex-auto input input-bordered"
    />
    <button class="btn btn-outline">Add</button>
  </form>
</main>
