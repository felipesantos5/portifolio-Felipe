import { useState, useEffect } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export const DarkmodeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());

    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button className={`icon-container ${isDarkMode ? "dark" : "light"}`} onClick={toggleDarkMode}>
      {isDarkMode ? <IoMdSunny className="text-yellow-400 text-4xl icon" /> : <IoMdMoon className="text-gray-600 text-3xl icon" />}
    </button>
  );
};
