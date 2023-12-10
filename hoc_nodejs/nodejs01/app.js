import express from "express";
import expressLayouts from "express-ejs-layouts";
import routerIndex from "./routes/index.js";
import routerUsers from "./routes/users.js";
import routerAuth from "./routes/auth.js";
import authMiddleware from "./middlewares/auth.middleware.js";
// import roleMiddleware from "./middlewares/role.middleware.js";

const app = express();
const port = 8080;

// setup template engine
app.set('views', "./views");
app.set('view engine', 'ejs');
app.use(expressLayouts); // su dung express layout
app.set("layout", "layouts/layout.default.ejs");

//Routing
app.use(routerAuth)
app.use(authMiddleware)
app.use(routerIndex);
app.use("/users", routerUsers);

//Listener
app.listen(port, () => {
  console.log("Server đang chạy: http://localhost:8080");
});
