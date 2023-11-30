import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";
// import { postCreateUser } from "../api/userApi";

import { toast } from "react-toastify";
const ModalAddTodo = (props) => {
  const { show, handleClose } = props;
  const [todo, setTodo] = useState("");

  const handleSaveTodo = async () => {
    // let res = await postCreateUser(name, job);
    // console.log(name, job);
    // console.log(res);
    if (res && res.id) {
      handleClose();
      setTodo("");
      toast.success("Todo added successfully");
    } else {
      toast.error("Todo added failed");
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Todo Name"
              aria-label="TodoName"
              aria-describedby="basic-addon1"
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddTodo;
