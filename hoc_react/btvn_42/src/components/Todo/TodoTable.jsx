import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import ReactPaginate from "react-paginate";
// import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import _, { debounce } from "lodash";

import ModalAddTodo from "./ModalAddTodo";
import { getListTodo } from "../../api/todoApi";

import { toast } from "react-toastify";

const TodoTable = () => {
  const navigate = useNavigate();

  const [listTodo, setListTodo] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const apiKey = localStorage.getItem("apiKey");
    let res = await getListTodo(apiKey);
    console.log(res);

    if (res && res.data) {
      setListTodo(res.data);
    }
  };

  const [isShowModalAddTodo, setIsShowModalAddTodo] = useState(false);
  const handleClose = () => {
    setIsShowModalAddTodo(false);
    // setIsShowModalEditUser(false);
    // setIsShowModalDeleteUser(false);
  };

  const handleEditTodo = () => {};

  const handleDeleteTodo = () => {};

  return (
    <>
      <div className="my-3 d-flex justify-content-between">
        List Users:
        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsShowModalAddTodo(true)}
        >
          <span>Add todo</span>
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <tr key={`todo-${index}`}>
                  <td>{item.todo}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    <Button
                      className="mx-3"
                      variant="warning"
                      onClick={() => {
                        handleEditTodo(item);
                      }}
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        handleDeleteTodo(item);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <ModalAddTodo
        show={isShowModalAddTodo}
        handleClose={handleClose}
        // handleUpdateTable={handleUpdateTable}
      />
    </>
  );
};

export default TodoTable;
