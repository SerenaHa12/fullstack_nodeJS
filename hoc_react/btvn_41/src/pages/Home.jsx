import { useState, useEffect } from "react";
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
import { fetchTasks, addTask, editTask, deleteTask } from "../api/todo";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");
  const [hasTasks, setHasTasks] = useState(false);

  const apiKey = localStorage.getItem("apiKey");

  useEffect(() => {
    if (apiKey) {
      fetchTasks(apiKey)
        .then((data) => {
          setTasks(data);
          setHasTasks(data.length > 0);
        })
        .catch((error) => {
          setAlertSeverity("error");
          setAlertMessage(error.message);
          setAlertOpen(true);
        });
    }
  }, [apiKey]);

  const handleAddTask = async () => {
    try {
      if (apiKey) {
        await addTask(apiKey, newTask);
        setNewTask("");
        fetchTasks(apiKey)
          .then((data) => {
            setTasks(data);
            setHasTasks(data.length > 0);
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
        await editTask(apiKey, editingTask.id, editingTask.title);
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
      {hasTasks ? (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              {editingTask && editingTask.id === task.id ? (
                <>
                  <TextField
                    label="Edit task"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={editingTask.title}
                    onChange={(e) =>
                      setEditingTask({ ...editingTask, title: e.target.value })
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
                  <ListItemText primary={task.title} />
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
                      onClick={() => handleDeleteTask(task.id)}
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
