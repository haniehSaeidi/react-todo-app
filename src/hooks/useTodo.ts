import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  searchTodo,
} from "services/mockTodoService";
import { useNotification } from "hooks/useNotification";

export const useTodos = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { data: todos } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
    onError: () => {
      showNotification("Failed to add the todo. Please try again!", "error");
    },
  });
  const editTodoMutation = useMutation(editTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
    onError: () => {
      showNotification("Failed to update the todo. Please try again!", "error");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      showNotification("Todo deleted successfully!", "success");
    },
    onError: (error: any) => {
      showNotification("Failed to delete the todo. Please try again!", "error");
    },
  });

  const searchTodoMutation = useMutation(searchTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
    onError: () => {
      showNotification("Failed to search todos. Please try again!", "error");
    },
  });

  return {
    todos,
    addTodoMutation,
    editTodoMutation,
    deleteTodoMutation,
    searchTodoMutation,
  };
};
