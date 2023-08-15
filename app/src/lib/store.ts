import { writable, readable, type Writable } from "svelte/store";

export type Todo = {
  title: string;
};

const creteTodos = () => {
  const { subscribe, set, update } = writable<Todo[]>([]);

  return {
    subscribe,
    add: (todo: Todo) => update((todos) => [...todos, todo]),
    remove: (todo: Todo) => update((todos) => todos.filter((t) => t !== todo)),
    clear: () => set([]),
  };
};

export const todos = creteTodos();
