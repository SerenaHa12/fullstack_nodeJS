// Column.js
import React from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onAddTask, onMoveTask }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <VStack spacing={2} align="stretch">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onMoveTask={() => onMoveTask(index)} />
        ))}
      </VStack>
    </Box>
  );
};

export default Column;
