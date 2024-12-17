export type Todo = {
  id: number;
  title: string;
  description?: string;
  status: Status;
}

export type Status = "done" | "pending";

export type FilterTodos = "done" | "pending" | "all";

export type NotificationType = "success" | "error";

export type NotificationContextType = {
  showNotification: (message: string, type: NotificationType) => void;
};