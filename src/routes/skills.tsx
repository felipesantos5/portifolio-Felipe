import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UseDarkMode } from "../contexts/DarkModeContext";
import Lottie from "lottie-react";
import loadingAnimationWhite from "../assets/loadingAnimationWhite.json";
import loadingAnimationBlack from "../assets/loadingAnimationBlack.json";

interface IconTextPair {
  id: string;
  icon: string;
  text: string;
  title: string;
}

export const Skills = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [lastHoveredIcon, setLastHoveredIcon] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const { isDarkMode } = UseDarkMode();

  const iconTextPairs: IconTextPair[] = useMemo(
    () => [
      { id: "icon1", icon: "html", text: t("skills.html"), title: "Html" },
      { id: "icon2", icon: "css", text: t("skills.css"), title: "Css" },
      { id: "icon3", icon: "js", text: t("skills.javascript"), title: "Javascript" },
      { id: "icon4", icon: "react", text: t("skills.react"), title: "React" },
      { id: "icon5", icon: "ts", text: t("skills.typescript"), title: "Type Script" },
      { id: "icon6", icon: "nextjs", text: t("skills.next"), title: "Next.js" },
      { id: "icon7", icon: "tailwind", text: t("skills.tailwind"), title: "Tailwind" },
      { id: "icon8", icon: "sass", text: t("skills.sass"), title: "Sass" },
      { id: "icon9", icon: "styledcomponents", text: t("skills.styled-components"), title: "Styled Components" },
      { id: "icon10", icon: "nodejs", text: t("skills.node"), title: "Node.js" },
      { id: "icon11", icon: "firebase", text: t("skills.firebase"), title: "Firebase" },
      { id: "icon12", icon: "git", text: t("skills.git"), title: "Git" },
    ],
    [t]
  );

  const handleMouseEnter = (icon: string) => {
    const textPair = iconTextPairs.find((pair) => pair.icon === icon);
    if (textPair) {
      setHoveredIcon(textPair.text);
      setLastHoveredIcon(textPair.text);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIcon(lastHoveredIcon);
  };

  useEffect(() => {
    const imageLoadPromises = iconTextPairs.map((pair) => {
      const image = new Image();
      image.src = `https://skillicons.dev/icons?i=${pair.icon}`;
      return new Promise<void>((resolve) => {
        image.onload = () => {
          resolve();
        };
      });
    });

    Promise.all(imageLoadPromises).then(() => {
      setLoading(false);
    });
  }, [iconTextPairs]);

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1 flex items-center justify-center">
      <section className="flex justify-between items-center gap-8 md:flex-col m-auto max-w-5xl text-white px-6">
        <motion.div className="flex justify-start gap-6 flex-wrap w-2/4  md:w-full md:justify-center sm:mt-6">
          {loading ? (
            <div className="m-auto">
              <Lottie className="w-52" animationData={isDarkMode ? loadingAnimationWhite : loadingAnimationBlack} />
            </div>
          ) : (
            iconTextPairs.map((pair) => (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 2 }} transition={{ ease: "easeOut", duration: 3 }} key={pair.id}>
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 sm:w-16"
                  src={`https://skillicons.dev/icons?i=${pair.icon}`}
                  alt={`icon of ${pair.icon}`}
                  onMouseEnter={() => handleMouseEnter(pair.icon)}
                  onMouseLeave={handleMouseLeave}
                />
              </motion.div>
            ))
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className={`bg-black p-10 w-1/2 h-96 rounded-xl flex justify-center md:w-full  ${!hoveredIcon ? "md:h-44" : "md:h-full"} md:mb-6`}
        >
          {hoveredIcon ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">{iconTextPairs.find((pair) => pair.text === hoveredIcon)?.title}</h2>
              <p className="text-lg text-justify sm:text-base">{hoveredIcon}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center text-center">
              <p className="text-zinc-300 text-xl">{t("skills.card")}</p>
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
};
