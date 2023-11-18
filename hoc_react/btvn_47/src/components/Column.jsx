
import { Box, VStack, Heading } from '@chakra-ui/react';
import TaskCard from './TaskCard';

const Column = ({ column }) => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md" minWidth="250px">
      <Heading size="md" mb={4}>
        {column.name}
      </Heading>
      <VStack spacing={4} align="start">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </VStack>
    </Box>
  );
};

export default Column;
