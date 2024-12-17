import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useCallback, useState } from "react";
import { useTodos } from "hooks/useTodo";
import { Status } from "types/todo";

type EditTodoProps = {
  id: number;
  currentTitle: string;
  currentDescription?: string;
  currentStatus: Status;
  open: boolean;
  onClose: () => void;
};

export const EditTodo = ({
  id,
  currentTitle,
  currentDescription,
  currentStatus,
  open,
  onClose,
}: EditTodoProps) => {
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription || "");
  const [status, setStatus] = useState<Status>(currentStatus);
  const { editTodoMutation } = useTodos();

  const handleEditTodo = useCallback(() => {
    editTodoMutation.mutate(
      { id, title, description, status },
      {
        onSuccess: () => {
          onClose();
        },
        onError: (error: any) => {
          console.error("Failed to update todo:", error);
        },
      }
    );
  }, [id, title, description, status, onClose, editTodoMutation]);


  return (
    <Dialog
      open={open}
      fullWidth
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
        Edit Task
      </DialogTitle>
      <DialogContent dividers>
        <Box>
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            error={!title}
            autoFocus
            required
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            id='outlined-multiline-flexible'
            label='Description'
            multiline
            fullWidth
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <FormControl>
            <FormLabel id='status-label'>Status</FormLabel>
            <RadioGroup
              row
              aria-labelledby='status-label'
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
            >
              <FormControlLabel value='done' control={<Radio />} label='Done' />
              <FormControlLabel
                value='pending'
                control={<Radio />}
                label='Pending'
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogContent dividers>
        <Button
          variant={"contained"}
          onClick={handleEditTodo}
          disabled={!title}
        >
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
