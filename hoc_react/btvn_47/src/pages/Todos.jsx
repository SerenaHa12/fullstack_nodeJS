import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import KanbanBoard from "../components/KanbanBoard";
import Column from "../components/Column";

const queryClient = new QueryClient();

const Todos = () => {
  const columns = [
    {
      id: 'todo',
      name: 'To Do',
      tasks: [
        { id: '1', content: 'Task 1' },
        { id: '2', content: 'Task 2' },
      ],
    },
    {
      id: 'doing',
      name: 'Doing',
      tasks: [
        { id: '3', content: 'Task 3' },
        { id: '4', content: 'Task 4' },
      ],
    },
    {
      id: 'done',
      name: 'Done',
      tasks: [
        { id: '5', content: 'Task 5' },
        { id: '6', content: 'Task 6' },
      ],
    },
  ];
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <KanbanBoard columns={columns} />
      </QueryClientProvider>
    </>
  );
};

export default Todos;
