import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useCallback, useState } from "react";
import { useTodos } from "hooks/useTodo";

const AddTodoCard = styled(Card)`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodoMutation } = useTodos();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleAddTodo = useCallback(() => {
    addTodoMutation.mutate(
      { title, description },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
          handleClose();
        },
        onError: (error: any) => {
          console.error("Failed to add todo:", error);
        },
      }
    );
  }, [
    title,
    description,
    setTitle,
    setDescription,
    handleClose,
    addTodoMutation,
  ]);

  return (
    <>
      <AddTodoCard onClick={handleOpen} color='#ededed'>
        <AddIcon sx={{ fontSize: 100, color: "gray" }} />
      </AddTodoCard>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Add a new task
        </DialogTitle>
        <DialogContent dividers>
          <Box>
            <TextField
              id='outlined-basic'
              label='Title'
              variant='outlined'
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
        </DialogContent>
        <DialogContent dividers>
          <Button
            variant={"contained"}
            onClick={handleAddTodo}
            disabled={!title}
          >
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
