// Column.js
import React from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  HStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { getTask } from "../../redux/slice/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

const Column = ({ column }) => {
  const { taskData, error } = useSelector((state) => state.task);
  // console.log(taskData);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: column._id,
      data: { ...column },
    });

  const dndKitColumnStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      p={4}
      borderWidth="1px"
      borderRadius="md"
      w="300px"
    >
      <Flex justifyContent="space-between">
        <HStack>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            {column.columnName}
          </Text>
        </HStack>
        <HStack>
          <Button colorScheme="teal" size="xs">
            Edit
          </Button>
          <Button colorScheme="red" size="xs">
            Delete
          </Button>
        </HStack>
      </Flex>
      <VStack spacing={2} align="stretch">
        {column.taskList.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </VStack>
    </Box>
  );
};

export default Column;
