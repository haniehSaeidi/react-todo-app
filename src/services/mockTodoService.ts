import { Todo } from "types/todo";

const todos: Todo[] = [];

export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.trim().toLowerCase())
  );
  return [...filteredTodos];
};

export const addTodo = async (
  todo: Pick<Todo, "title" | "description">
): Promise<Todo> => {
  const newTodo: Todo = {
    id: todos.length + 1,
    title: todo.title,
    status: "pending",
    description: todo.description || "",
  };

  todos.push(newTodo);
  return newTodo;
};

export const editTodo = async (todo: Todo) => {
  const index = todos.findIndex((t) => t.id === todo.id);

  if (index === -1) {
    throw new Error(`Todo with id ${todo.id} not found`);
  }

  todos[index] = { ...todos[index], ...todo };
  return todos[index];
};

export const deleteTodo = async (id: number): Promise<void> => {
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
  } else {
    throw new Error("Todo not found!");
  }
};

export const searchTodo = async (searchKey: string): Promise<Todo[]> => {
  return todos.filter((t) => t.title.toLowerCase().includes(searchKey));
};
