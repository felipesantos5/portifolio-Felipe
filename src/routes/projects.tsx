import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/projectCard/projectCard";
import printCrypto from "../assets/printCrypto.png";
import printWebNotices from "../assets/printWebNotices.png";
import printAccessibilityGuide from "../assets/printAccessibilityGuide.png";
import printToDoList from "../assets/printToDoList.png";

import logoAccessibilityGuide from "../assets/logoAccessibilityGuide.png";
import logoToDoList from "../assets/logoToDoList.png";
import logoCryptoWorld from "../assets/logoCryptoWorld.png";
import logoWebNotices from "../assets/logoWebNotices.png";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-gray-200 dark:bg-zinc-900 darkMode-effect flex-1">
      <section className="m-auto max-w-7xl px-10 py-16 h-full flex flex-col justify-center">
        <div className="flex flex-wrap justify-center gap-10">
          <ProjectCard
            title="Web-Notices"
            textDescription={t("projects.Web-Notices.textDescription")}
            imgIcon={logoWebNotices}
            linkProject={"https://web-notices.vercel.app/"}
            printProject={printWebNotices}
            githubProject={"https://github.com/felipesantos5/Web-Notices"}
          />
          <ProjectCard
            title="Crypto-World"
            textDescription={t("projects.Crypto-World.textDescription")}
            imgIcon={logoCryptoWorld}
            linkProject={"https://crypto-world-phi.vercel.app/"}
            printProject={printCrypto}
            githubProject={"https://github.com/felipesantos5/Crypto-World"}
          />
          <ProjectCard
            title="To-do-List"
            textDescription={t("projects.To-do-List.textDescription")}
            imgIcon={logoToDoList}
            linkProject={"https://to-do-list-felipesantos5.vercel.app/"}
            printProject={printToDoList}
            githubProject={"https://github.com/felipesantos5/to-do-list"}
          />
          <ProjectCard
            title="Accessibility-Guide"
            textDescription={t("projects.Accessibility-Guide.textDescription")}
            imgIcon={logoAccessibilityGuide}
            linkProject={"https://felipesantos5.github.io/accessibility-guide/"}
            printProject={printAccessibilityGuide}
            githubProject={"https://github.com/felipesantos5/accessibility-guide"}
          />
        </div>
      </section>
    </main>
  );
};
