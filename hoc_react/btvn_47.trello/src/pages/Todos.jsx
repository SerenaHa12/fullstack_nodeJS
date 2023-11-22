import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import KanbanBoard from "../components/KanbanBoard";
import Column from "../components/Column";
import ButtonAddTask from "../components/ButtonAddTask";
const queryClient = new QueryClient();

const Todos = () => {
  
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ButtonAddTask />
        <KanbanBoard />
      </QueryClientProvider>
    </>
  );
};

export default Todos;
