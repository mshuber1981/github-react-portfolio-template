import React from "react";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [theme, setTheme] = React.useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleTheme = () =>
    setTheme((prevState) =>
      prevState === "light" ? setTheme("dark") : setTheme("light")
    );

  const openSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isSidebarOpen,
        toggleTheme,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export { AppContext, AppProvider };
