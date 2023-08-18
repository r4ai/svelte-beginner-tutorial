<script lang="ts">
  import NavBar from "./lib/NavBar.svelte";
  import TodoItem from "./lib/TodoItem.svelte";

  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

  let todos: Todo[] = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  $: localStorage.setItem("todos", JSON.stringify(todos));

  let todoTitle = "";

  const handleAddTodo = () => {
    todos = [
      ...todos,
      { id: todos.length + 1, title: todoTitle, completed: false },
    ];
    todoTitle = "";
  };

  const deleteTodo = (id: number) => {
    todos = todos.filter((x) => x.id !== id);
  };
</script>

<NavBar />
<main
  class="flex w-full max-w-xl grow flex-col space-y-4 self-center overflow-y-hidden p-4"
>
  <h2 class="text-2xl font-black">ToDo List</h2>
  <div class="grow space-y-2 overflow-y-auto">
    <h3 class="font-bold">未完了</h3>
    <div class="flex flex-col gap-2">
      {#each todos.filter((x) => !x.completed) as todo}
        <TodoItem
          id={todo.id}
          title={todo.title}
          bind:completed={todo.completed}
          {deleteTodo}
        />
      {/each}
    </div>
    <h3 class="mt-4 font-bold">完了済み</h3>
    <div class="flex flex-col gap-2">
      {#each todos.filter((x) => x.completed) as todo}
        <TodoItem
          id={todo.id}
          title={todo.title}
          bind:completed={todo.completed}
          {deleteTodo}
        />
      {/each}
    </div>
  </div>
  <form on:submit|preventDefault={handleAddTodo} class="flex flex-row gap-4">
    <input
      type="text"
      placeholder="Add a new ToDo"
      bind:value={todoTitle}
      class="input input-bordered grow"
    />
    <button class="btn btn-outline">Add</button>
  </form>
</main>
