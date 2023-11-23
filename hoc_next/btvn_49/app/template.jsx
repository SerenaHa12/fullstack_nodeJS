"use client";
import React from "react";

// ui component
import { motion } from "framer-motion";

// hooks
import useScrollProgress from "@/hooks/useScrollProgress";

// variant
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completition bar */}
      <span
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
        style={{ transform: `translateY(${completion - 100}%)` }}
      ></span>
      <div className="h-[4000px"></div>
    </>
  );
};

export default Template;
