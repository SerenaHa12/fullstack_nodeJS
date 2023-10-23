import { client } from "./client.js";
import { config } from "./config.js";
import { successAlert, dangerAlert } from "./util.js";

// export const hanldeSubmitSignIn = async (data) => {
//     const { data: dataResponse, response: response } = await client.post("/auth/login", data);
//     if ( response.status === 201) {
//       const { accessToken, refreshToken } = dataResponse;
//       localStorage.setItem("access_token", accessToken);
//       localStorage.setItem("refresh_token", refreshToken);
//       return true;
//     } else {
//       return false;
//     }
//   };