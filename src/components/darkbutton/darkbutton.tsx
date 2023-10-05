import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { UseDarkMode } from "../../contexts/DarkModeContext";

export const DarkmodeButton = () => {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();

  return (
    <button className={`icon-container ${isDarkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
      {isDarkMode ? <IoMdSunny className="text-white text-4xl icon" /> : <IoMdMoon className="text-black text-3xl icon" />}
    </button>
  );
};
