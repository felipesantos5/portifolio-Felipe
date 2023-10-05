import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const UseDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
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

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};
