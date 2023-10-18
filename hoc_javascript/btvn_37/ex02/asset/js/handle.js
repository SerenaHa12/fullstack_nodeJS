import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);

export const hanldeSubmitSignUp = ({ name, email, password }) => {
  const signupData = {
    name: name,
    email: email,
    password: password,
  };
  console.log(signupData);

  client
    .post("/auth/register", signupData)
    .then(({ response, data }) => {
      console.log(response);
      if (response.status === 201) {
        alert(data.message); // Thay signupData.data bằng thông điệp bạn muốn hiển thị
      } else {
        alert(data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Đăng ký thất bại"); // Thay signupData.data bằng thông điệp bạn muốn hiển thị
    });
};

export const hanldeSubmitSignIn = async (data) => {
  const { data: dataResponse, response: response } = await client.post("/auth/login", data);
  if ( response.status === 201) {
    const { accessToken, refreshToken } = dataResponse;
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    return true;
  } else {
    return false;
  }
};
