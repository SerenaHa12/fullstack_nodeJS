import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const app = document.querySelector("#app");

// import { Header } from "./src/components/Header";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Product from "./src/pages/Product";
import ProductDetail from "./src/pages/ProductDetail";
import Notfound from "./src/pages/Notfound";

// import Layout from "./src/layouts/Layout";

import { render, router } from "./src/utils";

router.on("/", () => render(Home, app));
router.on("/about", () => render(About, app));
router.on("/product", () => render(Product, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));
router.notFound(() => render(Notfound, app));

router.resolve();
render(Home, app);
