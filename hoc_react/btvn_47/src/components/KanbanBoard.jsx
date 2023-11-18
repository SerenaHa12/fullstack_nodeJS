import { VStack, HStack } from '@chakra-ui/react';
import Column from './Column';

const KanbanBoard = ({ columns }) => {
  return (
    <HStack spacing={4} align="flex-start">
      {columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </HStack>
  );
};

export default KanbanBoard;