import { QueryClientProvider } from "react-query";
import { TodoDashboard } from "./components";
import { Container } from "@mui/material";
import { queryClient } from "./services/reactQuery";
import "./index.css";
import { NotificationProvider } from "contexts/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <div className='App'>
        <QueryClientProvider client={queryClient} contextSharing={true}>
          <Container maxWidth='md'>
            <TodoDashboard />
          </Container>
        </QueryClientProvider>
      </div>
    </NotificationProvider>
  );
}

export default App;
