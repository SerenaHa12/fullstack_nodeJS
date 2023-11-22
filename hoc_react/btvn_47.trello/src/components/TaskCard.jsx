import { Box, Text } from '@chakra-ui/react';

const TaskCard = ({ task }) => {
  return (
    <Box
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      borderWidth="1px"
      width="100%"
    >
      <Text>{task.content}</Text>
    </Box>
  );
};

export default TaskCard;
