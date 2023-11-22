import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, target) => {
  target.innerHTML = content();
};

export { render, router };
