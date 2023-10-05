import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Personal = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1">
      <div className="m-auto h-full max-w-7xl py-20 px-10 flex flex-col justify-center gap-4 text-black dark:text-white">
        <motion.h1 initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ type: "spring", duration: 1.5, damping: 20, stiffness: 80 }} className="text-6xl font-semibold">
          {t("personal.title")}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1.8 }} className="text-lg text-justify">
          {t("personal.text")}
        </motion.p>
      </div>
    </main>
  );
};
