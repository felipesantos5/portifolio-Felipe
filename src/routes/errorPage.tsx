import { Footer } from "../components/footer/footer";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import { Header } from "../components/header/header";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <DarkModeProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="bg-gray-200 dark:bg-zinc-900 text-black dark:text-white darkMode-effect flex-1">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="m-auto max-w-5xl px-10 h-full flex flex-col justify-center gap-6"
          >
            <h1 className="text-5xl font-bold sm:text-3xl">{t("errorPage.title")}</h1>
            <p className="text-lg sm:text-base">{t("errorPage.text")}</p>
          </motion.section>
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};
