import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomAlert from "../utils/Alert";
import { fetchTasks, addTask, editTask, deleteTask } from "../api/todoApi";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  // alert
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");

  // lay api key
  const apiKey = localStorage.getItem("apiKey");

  // useEffect(() => {
  //   if (apiKey) {
  //     fetchTasks(apiKey)
  //       .then((data) => {
  //         setTasks(data.data.listTodo);
  //       })
  //       .catch((error) => {
  //         setAlertSeverity("error");
  //         setAlertMessage(error.message);
  //         setAlertOpen(true);
  //       });
  //   }
  // }, [apiKey]);

  const handleAddTask = async () => {
    try {
      if (apiKey) {
        await addTask(apiKey, newTask);
        setNewTask("");
        fetchTasks(apiKey)
          .then((data) => {
            setTasks(data.data.listTodo);
          })
          .catch((error) => {
            setAlertSeverity("error");
            setAlertMessage(error.message);
            setAlertOpen(true);
          });
        setAlertSeverity("success");
        setAlertMessage("Task added successfully.");
        setAlertOpen(true);
      }
    } catch (error) {
      console.error("Add Fail:", error);
      setAlertSeverity("error");
      setAlertMessage(error.message);
      setAlertOpen(true);
    }
  };

  const handleEditTask = async () => {
    try {
      if (apiKey) {
        await editTask(apiKey, editingTask._id, editingTask.todo);
        setEditingTask(null);
        fetchTasks(apiKey)
          .then((data) => {
            setTasks(data);
          })
          .catch((error) => {
            setAlertSeverity("error");
            setAlertMessage(error.message);
            setAlertOpen(true);
          });
      }
    } catch (error) {
      console.error("Edit Fail:", error);
      setAlertSeverity("error");
      setAlertMessage(error.message);
      setAlertOpen(true);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      if (apiKey) {
        await deleteTask(apiKey, taskId);
        fetchTasks(apiKey)
          .then((data) => {
            setTasks(data);
          })
          .catch((error) => {
            setAlertSeverity("error");
            setAlertMessage(error.message);
            setAlertOpen(true);
          });
      }
    } catch (error) {
      console.error("Delete Fail:", error);
      setAlertSeverity("error");
      setAlertMessage(error.message);
      setAlertOpen(true);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "100px" }}>
      <h2>To Do List</h2>
      <TextField
        label="Add task"
        variant="outlined"
        fullWidth
        margin="normal"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
      {tasks.length > 0 ? (
        <List>
          {tasks.map((task) => (
            <ListItem key={task._id}>
              {editingTask && editingTask.id === task._id ? (
                <>
                  <TextField
                    label="Edit task"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={editingTask.todo}
                    onChange={(e) =>
                      setEditingTask({ ...editingTask, todo: e.target.value })
                    }
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditTask}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <ListItemText primary={task.todo} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      onClick={() => setEditingTask(task)}
                    >
                      Edit
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </>
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No tasks available.</p>
      )}

      <CustomAlert
        open={alertOpen}
        severity={alertSeverity}
        message={alertMessage}
        onClose={() => setAlertOpen(false)}
      />
    </Container>
  );
}

export default HomePage;
