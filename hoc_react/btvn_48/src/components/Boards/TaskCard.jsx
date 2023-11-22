// Task.js
import React from "react";
import { Box, Text, CloseButton, HStack, IconButton } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { getTask } from "../../redux/slice/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskCard = ({ task }) => {
  return (
    <Box p={3} borderWidth="1px" borderRadius="md" position="relative">
      <HStack justify="space-between">
        <Text>{task.content}</Text>
        <HStack>
          <IconButton
            icon={<EditIcon />}
            size="sm"
            colorScheme="teal"
            aria-label="Edit Task"
          />
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            colorScheme="red"
            aria-label="Delete Task"
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default TaskCard;
