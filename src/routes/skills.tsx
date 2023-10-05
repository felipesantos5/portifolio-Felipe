import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface IconTextPair {
  id: string;
  icon: string;
  text: string;
  title: string;
}

export const Skills = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [lastHoveredIcon, setLastHoveredIcon] = useState<string | null>(null);

  const { t } = useTranslation();

  const iconTextPairs: IconTextPair[] = [
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
  ];

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

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1">
      <section className="flex justify-between gap-8 md:flex-col m-auto max-w-5xl text-white pt-36 px-6 md:pt-28">
        <div className="flex justify-start gap-6 flex-wrap w-2/4 md:w-full md:justify-center">
          {iconTextPairs.map((pair) => (
            <div key={pair.id}>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-20"
                src={`https://skillicons.dev/icons?i=${pair.icon}`}
                alt={`icon of ${pair.icon}`}
                onMouseEnter={() => handleMouseEnter(pair.icon)}
                onMouseLeave={handleMouseLeave}
                loading="lazy"
              />
            </div>
          ))}
          {/* <div className="m-auto">
              <Lottie className="w-52" animationData={isDarkMode ? loadingAnimationWhite : loadingAnimationBlack} />
            </div> */}
        </div>

        <div className="bg-black p-4 text-lg w-1/2 h-96 rounded-xl md:w-full md:h-full md:mb-6">
          {hoveredIcon ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">{iconTextPairs.find((pair) => pair.text === hoveredIcon)?.title}</h2>
              <p className="">{hoveredIcon}</p>
            </div>
          ) : (
            <p className="text-center text-zinc-300">{t("skills.card")}</p>
          )}
        </div>
      </section>
    </main>
  );
};
