import { writable, readable, type Writable } from "svelte/store";

export type Todo = {
  title: string;
  done: boolean;
};

const creteTodos = () => {
  const { subscribe, set, update } = writable<Todo[]>([]);

  return {
    subscribe,
    add: (todo: Todo) => update((todos) => [...todos, todo]),
    remove: (todo: Todo) => update((todos) => todos.filter((t) => t !== todo)),
    edit: (title: string, newTodo: Todo) =>
      update((todos) =>
        todos.map((todo) => (todo.title === title ? newTodo : todo)),
      ),
    clear: () => set([]),
  };
};

export const todos = creteTodos();
