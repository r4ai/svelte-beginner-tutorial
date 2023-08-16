import { writable } from "svelte/store";

export type Todo = {
  title: string;
  done: boolean;
};

const creteTodos = () => {
  const { subscribe, set, update } = writable<Todo[]>([]);

  return {
    subscribe,
    set,
    add: (todo: Todo) => update((todos) => [...todos, todo]),
    remove: (title: string) =>
      update((todos) => todos.filter((todo) => todo.title !== title)),
    edit: (title: string, newTodo: Todo) =>
      update((todos) =>
        todos.map((todo) => (todo.title === title ? newTodo : todo)),
      ),
    clear: () => set([]),
  };
};

export const todos = creteTodos();

export const loadTodos = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
