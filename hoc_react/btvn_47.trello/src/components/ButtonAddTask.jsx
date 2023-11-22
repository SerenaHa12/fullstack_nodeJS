import React from "react";
import { Button, ButtonGroup, Divider } from "@chakra-ui/react";
const ButtonAddTask = () => {
  const handleAddTask = () => {
    console.log('1');
  };
  return (
    <>
      <Button
        colorScheme="teal"
        size="sm"
        className="btn-addtask"
        marginTop="50px"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
      <Divider />
    </>
  );
};

export default ButtonAddTask;
