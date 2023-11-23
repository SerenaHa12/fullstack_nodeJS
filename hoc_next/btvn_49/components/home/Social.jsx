"use client";

import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/ha-serena-972297258/",
    name: <BsLinkedin />,
  },
  { path: "https://github.com/SerenaHa12", name: <BsGithub /> },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
