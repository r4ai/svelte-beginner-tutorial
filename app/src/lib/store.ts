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
    remove: (todo: Todo) => update((todos) => todos.filter((t) => t !== todo)),
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
  if (todos.length > 0) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
