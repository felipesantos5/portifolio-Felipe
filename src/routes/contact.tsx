import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1">
      <section className="m-auto max-w-4xl px-6 h-full flex flex-col justify-center md:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-white bg-zinc-950 p-8 rounded-xl flex flex-col justify-center gap-4"
        >
          <h2 className="text-4xl font-bold">{t("contact.title")}</h2>
          <p className="text-justify text-lg">{t("contact.text")}</p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.linkedin.com/in/felipesantosmarcelino/" target="_blank">
              <BiLogoLinkedin size="1.7rem" />
            </a>
            <a href="https://github.com/felipesantos5" target="_blank">
              <BiLogoGithub size="1.7rem" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
