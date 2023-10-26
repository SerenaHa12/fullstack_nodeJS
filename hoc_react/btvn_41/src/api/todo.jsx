// import CustomAlert from "../utils/Alert";

// export const addTask = async (request) => {
//   try {
//     if (apiKey) {
//       await axios.post(`${apiConfig.apiUrl}/todos`, request, {
//         headers: {
//           "X-Api-Key": apiKey,
//         },
//       });
//       setNewTask("");
//       fetchTasks();
//     }
//   } catch (error) {
//     console.error("Lỗi khi thêm task:", error);
//     setAlertSeverity("error");
//     setAlertMessage(`Lỗi khi thêm task: ${error.message}`);
//     setAlertOpen(true);
//   }
// };
