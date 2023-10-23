// file chạy chính

// impoet từ node module
import "../src/assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import "../src/assets/footer.scss";

// impoet từ src
import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import config from "../src/config.json";
const { SERVER_API } = config;

export const App = () => {
  return `
    <div>
        ${Header()}
        <main>
            <h1>Trang chu</h1>
            <a href="#" class="btn btn-primary">click me</a>
            <hr>
            ${moment().format("DD/MM/YYYY")}
            <hr>
        </main>
        ${Footer()}
    <div>`;
};
