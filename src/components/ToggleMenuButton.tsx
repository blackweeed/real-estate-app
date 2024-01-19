"use client";

import { motion, AnimatePresence } from "framer-motion";

import { AlignRight } from "lucide-react";
import React, { useState } from "react";
import { Menu } from "./Menu";

export const ToggleMenuButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggle(true)}
        className="px-4 py-2 bg-white  rounded-full inline-flex gap-2 justify-between items-center border-2 "
      >
        Menu
        <AlignRight size={20} strokeWidth={2.4} />
      </button>
      {toggle && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-screen top-0 left-0 right-0 fixed z-50 flex justify-center items-center bg-blue-600 bg-transparent/40"
          >
            <Menu setToggle={setToggle} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
