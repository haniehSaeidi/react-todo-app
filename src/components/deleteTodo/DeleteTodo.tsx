import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useTodos } from "hooks/useTodo";
import { useCallback } from "react";

type DeleteTodoProps = {
  open: boolean;
  id: number;
  onClose: () => void;
};

export const DeleteTodo = ({ open, id, onClose }: DeleteTodoProps) => {
  const { deleteTodoMutation } = useTodos();

  const handleDelete = useCallback(() => {
    deleteTodoMutation.mutate(id, {
      onSettled: onClose,
    });
  }, [id, deleteTodoMutation, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='delete-confirmation-title'
    >
      <DialogTitle id='delete-confirmation-title'>
        Are you sure to delete the todo?
      </DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color='secondary'>
          Cancel
        </Button>
        <Button onClick={handleDelete} variant='contained'>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
