import axios from "axios";
import apiConfig from "../api";

export const fetchTasks = async (apiKey) => {
  try {
    if (apiKey) {
      const response = await axios.get(`${apiConfig.apiUrl}/todos`, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Fail to get Todos:", error);
    throw new Error(`Fail to get Todos: ${error.response.data.message}`);
  }
};

export const addTask = async (apiKey, newTask) => {
  try {
    if (apiKey) {
      await axios.post(
        `${apiConfig.apiUrl}/todos`,
        {
          todo: newTask,
        },
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
    }
  } catch (error) {
    console.error("Add Fail:", error);
    throw new Error(`Add Fail: ${error.response.data.message}`);
  }
};

export const editTask = async (apiKey, taskId, taskTitle) => {
  try {
    if (apiKey) {
      await axios.put(
        `${apiConfig.apiUrl}/todos/${taskId}`,
        { todo: taskTitle },
        {
          headers: {
            "X-Api-Key": apiKey,
          },
        }
      );
    }
  } catch (error) {
    console.error("Edit Fail:", error);
    throw new Error(`Edit Fail: ${error.response.data.message}`);
  }
};

export const deleteTask = async (apiKey, taskId) => {
  try {
    if (apiKey) {
      await axios.delete(`${apiConfig.apiUrl}/todos/${taskId}`, {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
    }
  } catch (error) {
    console.error("Delete Fail:", error);
    throw new Error(`Delete Fail: ${error.response.data.message}`);
  }
};
