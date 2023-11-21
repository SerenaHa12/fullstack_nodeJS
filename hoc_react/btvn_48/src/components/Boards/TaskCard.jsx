// Task.js
import React from "react";
import { Box, Text, CloseButton } from "@chakra-ui/react";

const TaskCard = ({ task }) => {
  return (
    <Box
      p={3}
      borderWidth="1px"
      borderRadius="md"
      cursor="pointer"
      className="task-card"
    >
      <CloseButton
        size="sm"
        colorScheme='red'
        alignSelf="flex-end"
        className="close-btn-task-card"
      />
      <Text>{task}</Text>
    </Box>
  );
};

export default TaskCard;
