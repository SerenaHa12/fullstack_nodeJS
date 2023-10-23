import { client } from "./client.js";
import { config } from "./config.js";
import { successAlert, dangerAlert } from "./util.js";

export const handleSubmitRegister = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const registerForm = $(".register");
  const nameInput = $(".register-name_input");
  const emailInput = $(".register-email_input");
  const passwordInput = $(".register-password_input");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nameInputEl = nameInput.value;
    const emailInputEl = emailInput.value;
    console.log(typeof emailInputEl);
    const passwordInputEl = passwordInput.value;

    const signupData = {
      name: nameInputEl,
      email: emailInputEl,
      password: passwordInputEl,
    };

    await client
      .post("/auth/register", signupData)
      .then(({ response, data }) => {
        console.log(response);
        if (response.status === 201) {
          // alert(data.message);
          setTimeout(() => {
            successAlert(data.message);
          }, 4000);
          window.location.href = "login.html";
        } else {
          // alert(data.message);
          dangerAlert(data.message);
        }
      })
      .catch((err) => {
        // console.log(err);
        dangerAlert(err);
      });

    console.log(nameInputEl, emailInputEl, passwordInputEl);
  });
};
