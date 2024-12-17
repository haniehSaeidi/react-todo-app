import { TodoCard } from "components";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid2";
import { fetchTodos } from "services/mockTodoService";
import { FilterTodos, Todo } from "types/todo";
import { useMemo } from "react";
import { Typography, Paper } from "@mui/material";

import SearchOffIcon from "@mui/icons-material/SearchOff";

type TodoListProps = {
  searchQuery: string;
  filterStatus: FilterTodos;
};

export const TodoList = ({ searchQuery, filterStatus }: TodoListProps) => {
  const { data: todos } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  const filteredTodos = useMemo(() => {
    return todos?.filter((todo) => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "done" && todo.status === "done") ||
        (filterStatus === "pending" && todo.status === "pending");

      return matchesSearch && matchesStatus;
    });
  }, [todos, searchQuery, filterStatus]);

  if (!!searchQuery || filterStatus !== "all") {
    return (
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          p: 4,
        }}
      >
        <SearchOffIcon sx={{ fontSize: 64, color: "gray" }} />
        <Typography variant='h5' mt={2} fontWeight='bold' color='textPrimary'>
          No Tasks Found
        </Typography>
      </Paper>
    );
  }

  return (
    <>
      {filteredTodos?.map((todo: Todo, index) => (
        <Grid size={4} key={`todo_${index}`}>
          <TodoCard
            title={todo.title}
            description={todo.description ? todo.description : ""}
            status={todo.status}
            id={todo.id}
          />
        </Grid>
      ))}
    </>
  );
};
