import React from "react";
import Header from "./Header";

const Menu = ({ props }) => {
  const { menu, onReceiveData } = props;
  const handleClick = () => {
    onReceiveData("hello f8");
    props.name = "123";
    console.log(props.name);
  };
  return (
    <>
      <nav className="menu">
        {menu?.length &&
          menu?.map(({ id, link, title }) => (
            <li key={id}>
              <a href={link}>{title}</a>
            </li>
          ))}
      </nav>
      <button className="btn btn-dark" onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default Menu;
