import LoginHtml from "./pages/login.js";
import RegisterHtml from "./pages/register.js";
import { WelcomeHtml, handleWelcome } from "./pages/welcome.js";
// import { config } from "./js/config.js";
// import { client } from "./js/client.js";

// const { SERVER_AUTH_API } = config;
// client.setUrl(SERVER_AUTH_API);

const root = document.querySelector("#root");
const render = (component) => {
  //   if (localStorage.getItem("access_token")) {
  //     root.innerHTML = WelcomeHtml;
  //   } else {
  //     root.innerHTML = LoginHtml;

  //     // bắt sự kiện submit
  //     const loginForm = document.querySelector(".login");
  //     console.log(loginForm);
  //     loginForm?.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //       const emailEl = e.target.querySelector(".email");
  //       const passEl = e.target.querySelector(".password");
  //       const email = emailEl.value;
  //       const password = passEl.value;
  //       //   console.log(email, pass);

  //       handleLogin({ email, password });
  //       emailEl.value = "";
  //       passEl.value = "";
  //     });
  //   }
  root.innerHTML = component;
};

// render(LoginHtml);
// render(RegisterHtml);
// render(WelcomeHtml, handleWelcome);

// const getProfile = async () => {
//   const token = localStorage.getItem("access_token");
//   const { data } = client.get("/users/profile", token);
//   console.log(data);
// };

// const handleLogin = async (data) => {
//   const { data: tokens } = await client.post("/auth/login", data);
//   //   console.log(tokens);
//   //   "email": "john@mail.com",
//   //   "password": "changeme"
//   const { access_token, refresh_token } = tokens;
//   localStorage.setItem("access_token", access_token);
//   localStorage.setItem("refresh_token", refresh_token);

//   render();
// };
