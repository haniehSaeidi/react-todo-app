import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useCallback, useState } from "react";
import { TodoList, AddTodo } from "components";
import { FilterTodos } from "types/todo";

export const TodoDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterTodos>("all");

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value); // Update search state
    },
    []
  );

  const handleFilterStatusChange = useCallback(
    (event: SelectChangeEvent) => {
      setFilterStatus(event.target.value as FilterTodos); // Update filter state
    },
    []
  );

  return (
    <Box mt={5}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <TextField
            id='outlined-basic'
            label='Search'
            variant='outlined'
            fullWidth
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Grid>
        <Grid size={4}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={filterStatus}
              label='Filter'
              onChange={handleFilterStatusChange}
            >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='done'>Completed</MenuItem>
              <MenuItem value='pending'>Not completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={2} my={3}>
          <TodoList searchQuery={searchQuery} filterStatus={filterStatus} />
          {!searchQuery && filterStatus === "all" && (
            <Grid size={4}>
              <AddTodo />
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
