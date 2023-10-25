import Header from "./components/Header";
import React from "react";
function App() {
  // const h1 = React.createElement(
  //   "h1",
  //   {
  //     id: "title",
  //     className: "title",
  //     style: {
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     onClick: () => {
  //       console.log("click me");
  //     },
  //   },
  //   "hello F8"
  // );

  // const h2 = React.createElement("h2", {}, "học react rất khó");

  // const listItems = [];
  // for (let i = 1; i <= 10; i++) {
  //   const li = React.createElement("li", {}, `Item ${i}`);
  //   listItems.push(li);
  // }
  // const li = React.createElement("li", {}, "Item 1");
  // const li2 = React.createElement("li", {}, "Item 2");
  // const li3 = React.createElement("li", {}, "Item 3");
  // const listItems = [li, li2, li3];

  // const ul = React.createElement("ul", { className: "menu" }, listItems);
  // console.log(ul);

  // const div = React.createElement(
  //   "div",
  //   { className: "container" },
  //   h1,
  //   ul,
  //   h2
  // );
  // return div;

  const title = "xin chao f8";
  const isPrimary = false;
  const handleClick = (text) => {
    console.log(`hi`, text);
  };

  const Product = () => {
    return <h2>Danh sách san pham</h2>;
  };

  let welcome = <h2>Chào mừng bạn đã quay trở lại</h2>;
  let isLogin = true;
  // if (!isLogin) {
  //   welcome = <h2>Vui lòng đăng nhập để tiếp tục</h2>;
  // }

  const lists = ["Item 1", "Item 2", "Item 3"];

  const a = undefined;
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <iframe
        width={560}
        height={315}
        src="https://www.youtube.com/embed/F627pKNUCVQ?si=CR3WAWFUBHU3ogVB"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      />
      
      {lists.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      {isLogin ? (
        <h2>Chào mừng bạn đã quay trở lại</h2>
      ) : (
        <h2>Vui lòng đăng nhập để tiếp tục</h2>
      )}
      <Product />
      <ul className="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
      <button
        className={`btn ${isPrimary ? "btn-primary" : ""}`}
        onClick={() => {
          handleClick("f8");
        }}
      >
        Click me
      </button>
    </React.Fragment>
  );

  const div2 = (
    <div className="container">
      <h3>Học lập trình</h3>
      <h3>Học lập trình</h3>
      <h3>Học lập trình</h3>
      <h3>Học lập trình</h3>
      <h1>{title}</h1>
      <Product />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
      <button
        className={`btn ${isPrimary ? "btn-primary" : ""}`}
        onClick={() => {
          handleClick("f8");
        }}
      >
        Click me
      </button>
    </div>
  );
  // return div2;
}
export default App;

// https://transform.tools/
