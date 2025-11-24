import { useArticles } from "../../context/AppContext";
import ModeToggle from "../header/ModeToggle";
import SelectCategories from "../header/SelectCategories";

function NavBar({
  darkMode,
  setDarkMode,
  handleToggle,
  handleFilterClick,
  isMenuOpen,
  setIsMenuOpen,
  handleMenuToggle,
}) {
  const { setFilter, filter } = useArticles();

  const FILTERS = [
    { name: "Home", key: "home" },
    { name: "New", key: "new" },
    { name: "Popular", key: "popular" },
    { name: "Trending", key: "trending" },
  ];

  const CATEGORIES = [
    { name: "Science", key: "science" },
    { name: "Technology", key: "technology" },
    { name: "Health", key: "health" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:p-0 p-8 ">
      {/* Filtros principales */}
      {FILTERS.map((filter) => (
        <a
          key={filter.key}
          onClick={handleFilterClick(filter.key)}
          className="cursor-pointer hover:text-Soft-red"
        >
          {filter.name}
        </a>
      ))}

      <SelectCategories
        categories={CATEGORIES}
        handleFilterClick={handleFilterClick}
        setFilter={setFilter}
        filter={filter}
        handleMenuToggle={handleMenuToggle}
      />

      <ModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        handleToggle={handleToggle}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}
export default NavBar;