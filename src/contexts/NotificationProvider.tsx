import { Alert, Snackbar } from "@mui/material";
import { createContext, ReactNode, useCallback, useState } from "react";
import { NotificationType, NotificationContextType } from "types/todo";

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("success");

  const showNotification = useCallback(
    (message: string, type: NotificationType) => {
      setMessage(message);
      setType(type);
      setOpen(true);
    },
    []
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
        <Alert severity={type} variant='filled' sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
