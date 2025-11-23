import { useState, useRef } from "react";
import dropIcon from "../../assets/images/icon-dropdown.svg";

const SelectCategories = ({ categories, setFilter }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="select-categories-container relative text-Dark-gray-sh-blue dark:text-Grayish-blue"
      >
        <div
          onClick={() => setOpen(!open)}
          className={`categories-button-nav flex  items-center justify-between`}
        >
          <span className="flex flex-row gap-3">
            Categories
            <img
              src={dropIcon}
              alt="icon-dropdwon"
              className="icon-dropdown invert dark:invert-0 opacity-70"
            />
          </span>
        </div>
        {open && (
          <ul className="options-categories absolute w-full lg:text-center dark:bg-gray-800 bg-neutral-50 z-10 cursor-pointer ">
            {/* Mapear las categorías */}
            {categories.map((category) => (
              <li
                key={category.key}
                onClick={() => {
                  setFilter(category.key);
                  setOpen(false);
                }}
                className="p-2 hover:dark:bg-neutral-600 rounded-b-lg hover:bg-neutral-200 cursor-pointer"
              >
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default SelectCategories;
