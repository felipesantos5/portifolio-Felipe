import logoWhite from "/logoIcon.png";
import logoBlack from "/logoIconBlack.png";
import { MenuHamburguer } from "../menuHamburguer/menuHamburguer";
import { Nav } from "../navigation/nav";
import { UseDarkMode } from "../../contexts/DarkModeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isDarkMode } = UseDarkMode();

  return (
    <header className="bg-gray-200 dark:bg-zinc-900 px-8 h-32 darkMode-effect">
      <section className="flex justify-between items-center py-5 m-auto max-w-7xl ">
        <Link to={"/"}>
          <img src={isDarkMode ? logoWhite : logoBlack} alt="logo" className="w-24" />
        </Link>
        <div className="flex gap-10">
          <nav className="flex items-center gap-6 text-xl text-black dark:text-white md:hidden">
            <Nav />
          </nav>
        </div>
        <MenuHamburguer />
      </section>
    </header>
  );
};
