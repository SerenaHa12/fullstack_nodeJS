import express from "express";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
const app = express();
const port = 8080;

//Routing
app.use(routerIndex);
app.use("/users", routerUsers);

//Listener
app.listen(port, () => {
  console.log("Server đang chạy: http://localhost:8080");
});
