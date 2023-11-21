// App.js
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Flex,
  Input,
  Button,
  Text,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import Column from "./Column";

const initialData = {
  todo: ["Learn React", "Learn HTML"],
  inProgress: ["Learn Golang", "Learn Java"],
  done: ["Learn NextJS", "Learn CSS"],
};

function KanbanBoard() {
  const [boardData, setBoardData] = useState(initialData);
  return (
    <ChakraProvider>
      <Box>
        <Text fontSize="2xl" fontWeight="bold" mt={4}>
          Kanban Board
        </Text>
        

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {Object.keys(boardData).map((column) => (
            <GridItem key={column}>
              <Column
                title={column}
                tasks={boardData[column]}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

const getNextColumn = (currentColumn) => {
  const columns = ["todo", "inProgress", "done"];
  const currentIndex = columns.indexOf(currentColumn);
  return columns[currentIndex + 1];
};

export default KanbanBoard;
