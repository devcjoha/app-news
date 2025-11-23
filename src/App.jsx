import { useEffect, useState } from "react";
import Home from "./view/Home";
import { ArticlesProvider } from "./context/AppContext";
import useNewsFeed from "./hooks/useNewsFeed";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <>
      <ArticlesProvider >
        <main className="app w-screen min-h-screen  h-full font-primary text-Text-gray dark:bg-gray-800 bg-white-bg dark:text-neutral-300 z-0 @container">
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
          />
        </main>
      </ArticlesProvider>
    </>
  );
}

export default App;
