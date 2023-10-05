import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
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
          <Nav func={closeHamburguer} />
        </motion.div>
      )}
    </>
  );
};
