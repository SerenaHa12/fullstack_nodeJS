// const handleEditTask = async () => {
//     try {
//       if (apiKey) {
//         await editTask(apiKey, editingTask._id, editingTask.todo);
//         setEditingTask(null);
//         const data = await fetchTasks(apiKey);
//         setTasks(data);
//       }
//     } catch (error) {
//       console.error("Edit Fail:", error);
//       setAlertSeverity("error");
//       setAlertMessage(error.message);
//       setAlertOpen(true);
//     }
//   };

const Item = ({ task }) => {
  return <div>{task.todo}</div>;
};

export default Item;
