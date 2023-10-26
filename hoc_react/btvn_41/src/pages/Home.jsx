import React, { useState, useEffect } from "react";
import axios from "axios";
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
import apiConfig from "../api";
import CustomAlert from "../utils/Alert";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");
  const [hasTasks, setHasTasks] = useState(false);

  const apiKey = localStorage.getItem("apiKey");

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${apiConfig.apiUrl}/todos`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      setTasks(response.data);
      setHasTasks(response.data.length > 0);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách tasks:", error);
      setAlertSeverity("error");
      setAlertMessage(`Lỗi khi lấy danh sách tasks: ${error.message}`);
      setAlertOpen(true);
    }
  };

  useEffect(() => {
    if (apiKey) {
      fetchTasks();
    }
  }, [apiKey]);

  const addTask = async () => {
    try {
      await axios.post(
        `${apiConfig.apiUrl}/todos`,
        { title: newTask },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Lỗi khi thêm task:", error);
      setAlertSeverity("error");
      setAlertMessage(`Lỗi khi thêm task: ${error.message}`);
      setAlertOpen(true);
    }
  };

  const editTask = async () => {
    try {
      await axios.put(`${apiConfig.apiUrl}/todos/${editingTask.id}`, {
        title: editingTask.title,
      });
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Lỗi khi sửa task:", error);
      setAlertSeverity("error");
      setAlertMessage(`Lỗi khi sửa task: ${error.message}`);
      setAlertOpen(true);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${apiConfig.apiUrl}/todos/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error("Lỗi khi xóa task:", error);
      setAlertSeverity("error");
      setAlertMessage(`Lỗi khi xóa task: ${error.message}`);
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
      <Button variant="contained" color="primary" onClick={addTask}>
        Add Task
      </Button>
      {hasTasks ? (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              {editingTask && editingTask.id === task.id ? (
                <>
                  <TextField
                    label="Sửa công việc"
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
                    onClick={editTask}
                  >
                    Lưu
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
                      onClick={() => deleteTask(task.id)}
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
        <p>Chưa có task nào.</p>
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
