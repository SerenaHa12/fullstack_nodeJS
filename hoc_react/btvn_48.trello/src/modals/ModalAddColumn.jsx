import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const ModalAddColumn = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { show, handleClose, handleUpdateBoard } = props;
  const [column, setColumn] = useState("");
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Column</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Column Name</FormLabel>
              <Input
                placeholder="Input your column name"
                value={column}
                onChange={(event) => setColumn(event.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAddColumn;
