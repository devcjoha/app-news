import logoNews from "../../assets/images/logo.svg";
import { useArticles } from "../../context/AppContext";
import NavBar from "../header/NavBar";
import IconMenu from "../../assets/images/icon-menu.svg";
import IconClose from "../../assets/images/icon-menu-close.svg";
import { useState } from "react";

function Header({ darkMode, setDarkMode, handleToggle }) {
  const { setFilter } = useArticles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFilterClick = (filterName) => () => {
    setFilter(filterName);
    setIsMenuOpen(false);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between w-full h-20 lg:h-35 mb-3">
      {/* Logo */}
      <img src={logoNews} alt="logo" className="dark:invert lg:w-18 w-13" />

      {/* NavBar visible en desktop */}
      <nav className="hidden lg:flex gap-6 items-center ml-auto">
        <NavBar
          handleFilterClick={handleFilterClick}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleToggle={handleToggle}
          handleMenuToggle={handleMenuToggle}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>

      {/* Botón hamburguesa solo mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden z-60"
      >
        <img
          src={isMenuOpen ? IconClose : IconMenu}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className={
            isMenuOpen
              ? `w-5 h-5 dark:invert z-50`
              : `w-12 h-6 dark:invert z-50`
          }
        />
      </button>

      {/* Sidebar en mobile */}
      {isMenuOpen && (
        <aside className="fixed top-0 right-0 w-64 h-full bg-Off-white dark:bg-Very-dark-blue z-50 pt-20 flex flex-col gap-6 shadow-2xl">
          <NavBar
            handleFilterClick={handleFilterClick}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </aside>
      )}
    </header>
  );
}
export default Header;