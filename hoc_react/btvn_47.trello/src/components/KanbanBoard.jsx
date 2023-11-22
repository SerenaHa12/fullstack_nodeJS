import { VStack, HStack } from '@chakra-ui/react';
import Column from './Column';
import { getTask } from '../api/todoApi';

const KanbanBoard = ({ columns }) => {

  return (
    <HStack spacing={4} align="flex-start">
      {/* {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))} */}
    </HStack>
  );
};

export default KanbanBoard;