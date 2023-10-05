import Lottie from "lottie-react";
import { BsFillFileEarmarkTextFill, BsGithub, BsLinkedin } from "react-icons/bs";
import homeAnimationBlack from "../assets/homeAnimationBlack.json";
import homeAnimationWhite from "../assets/homeAnimationWhite.json";
import { UseDarkMode } from "../contexts/DarkModeContext";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const resumeUrl = "/CurriculoFelipe.pdf";

  const { isDarkMode } = UseDarkMode();

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1">
      <section className="m-auto h-full max-w-7xl py-20 px-10 flex justify-between items-center text-black dark:text-white md:justify-center">
        <div>
          <div>
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 2, damping: 25, stiffness: 80 }}
              className="flex flex-col font-black text-7xl md:text-6xl sm:text-5xl xsm:text-4xl"
            >
              <span className="">FELIPE</span>
              <span className="">SANTOS</span>
              <span className="">MARCELINO</span>
            </motion.h1>
          </div>
          <div className="flex gap-4 mt-2">
            <motion.a
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0 }}
              href="https://www.linkedin.com/in/felipesantosmarcelino/"
              target="_blank"
            >
              <BsLinkedin size="2rem" />
            </motion.a>

            <motion.a
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
              href="https://github.com/felipesantos5"
              target="_blank"
            >
              <BsGithub size="2rem" />
            </motion.a>

            <motion.a initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", duration: 0.5, delay: 1 }} href={resumeUrl} target="_blank">
              <BsFillFileEarmarkTextFill size="2rem" />
            </motion.a>
          </div>
        </div>
        <div className="flex justify-center md:hidden">
          <Lottie className="w-11/12  md:w-8/12" animationData={isDarkMode ? homeAnimationWhite : homeAnimationBlack} />
        </div>
      </section>
    </main>
  );
};
