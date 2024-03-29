// App.js
import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Container,
  Flex,
  Input,
  Button,
  Text,
  Spacer,
  VStack,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import Column from "./Column";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../redux/slice/taskSlice";
import { DndContext } from "@dnd-kit/core";
import { AddIcon } from "@chakra-ui/icons";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import ModalAddColumn from "../../modals/ModalAddColumn";
import { useDisclosure } from "@chakra-ui/react";

function KanbanBoard() {
  const { taskData, error } = useSelector((state) => state.task);

  const dispatch = useDispatch();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <ChakraProvider>
        <div className="kanban-container">
          <Box>
            <Flex justifyContent="space-between" marginBottom="20px">
              <Text fontSize="2xl" fontWeight="bold" mt={4}>
                Kanban Board
              </Text>
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="outline"
                size="md"
                mt={4}
              >
                Add Column
              </Button>
            </Flex>

            <Divider />

            <Flex className="column-wrapper" gap="30px" marginTop="20px">
              {taskData &&
                taskData.length > 0 &&
                taskData.map((column, index) => (
                  <Box key={index}>
                    <SortableContext
                      items={column.taskList.map((item) => item._id)}
                      strategy={horizontalListSortingStrategy}
                    >
                      <Column column={column} />
                    </SortableContext>
                  </Box>
                ))}
            </Flex>
          </Box>
        </div>
      </ChakraProvider>
    </DndContext>
  );
}

export default KanbanBoard;
