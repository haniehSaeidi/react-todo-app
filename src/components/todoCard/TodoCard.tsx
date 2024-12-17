import { Box, Card, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Status, Todo } from "types/todo";
import { EditTodo, DeleteTodo } from "components";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItemCard = styled(Card)<{ status: Status }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  background-color: #ffe4ea !important;
  height: 100%;
  cursor: pointer;
  opacity: ${(props) => (props.status === "done" ? 0.4 : 1)};
  text-decoration: ${(props) =>
    props.status === "done" ? "line-through" : "none"};
  position: relative;
`;

const DeleteIconWrapper = styled(Box)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoCard = React.memo(
  ({ title, description, status, id }: Todo) => {
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleOpenEdit = useCallback(() => setOpen(true), []);
    const handleCloseEdit = useCallback(() => setOpen(false), []);
    const handleOpenDelete = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      setOpenDelete(true);
    }, []);
    const handleCloseDelete = useCallback(() => setOpenDelete(false), []);

    return (
      <>
        <TodoItemCard onClick={handleOpenEdit} status={status}>
          <Typography variant='h5' component='div' p={2}>
            {title}
          </Typography>
          <DeleteIconWrapper onClick={handleOpenDelete}>
            <DeleteIcon sx={{ fontSize: 24 }} />
          </DeleteIconWrapper>
        </TodoItemCard>
        <EditTodo
          id={id}
          currentTitle={title}
          currentDescription={description}
          currentStatus={status}
          open={open}
          onClose={handleCloseEdit}
        />
        <DeleteTodo open={openDelete} id={id} onClose={handleCloseDelete} />
      </>
    );
  }
);
