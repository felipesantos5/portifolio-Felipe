import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Nav } from "../navigation/nav";

export const MenuHamburguer = () => {
  const [menuHamburguer, setMenuHamburguer] = useState<boolean>(false);

  const menuHamburguerOpen = () => {
    setMenuHamburguer(!menuHamburguer);
  };

  const closeHamburguer = () => {
    setMenuHamburguer(false);
  };

  return (
    <>
      <button onClick={menuHamburguerOpen} className="hidden md:block">
        <HiMenu size="2rem" className="text-black dark:text-white" />
      </button>
      {menuHamburguer && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="font-semibold text-xl text-black dark:text-white p-4 w-full h-screen flex flex-col gap-6 justify-center items-center fixed top-0 left-0 bg-gray-200 dark:bg-zinc-900 z-10"
        >
          <div className="fixed top-10 right-7 cursor-pointer text-white text-2xl">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center">
              <HiOutlineX size="1.8rem" onClick={menuHamburguerOpen} className="text-black dark:text-white" />
            </div>
          </div>
          <Nav func={closeHamburguer} />
        </motion.div>
      )}
    </>
  );
};
