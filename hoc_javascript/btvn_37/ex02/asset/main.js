import { config } from "./config.js";
import { client } from "./client.js";

const { SERVER_AUTH_API } = config;
client.setUrl(SERVER_AUTH_API);
const root = document.querySelector("#root");
const render = () => {};
render();
