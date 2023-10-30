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
import CustomAlert from "../utils/Alert";
import { fetchTasks, addTask } from "../api/todoApi";
import Item from "../components/Item";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // alert
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");

  // lay api key
  const apiKey = localStorage.getItem("apiKey");

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
            <Item task={task} key={task._id} />
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
