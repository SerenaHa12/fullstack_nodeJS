import { App } from "./App";
import dotenv from "dotenv";
dotenv.config();

const root = document.querySelector("#root");
root.innerHTML = App();
