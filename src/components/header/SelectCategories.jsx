import { useState, useRef } from "react";
import dropIcon from "../../assets/images/icon-dropdown.svg";

const SelectCategories = ({ categories, setFilter }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="select-categories-container relative text-Dark-gray-sh-blue dark:text-Grayish-blue cursor-pointer"
      >
        <div
          onClick={() => setOpen(!open)}
          className={`categories-button-nav flex  items-center justify-between`}
        >
          <span className="flex flex-row gap-3 hover:text-Soft-red">
            Categories
            <img
              src={dropIcon}
              alt="icon-dropdwon"
              className="icon-dropdown invert dark:invert-0 opacity-50"
            />
          </span>
        </div>
        {open && (
          <ul className="options-categories absolute lg:w-41 w-full  dark:bg-gray-800 bg-Off-white z-10 cursor-pointer shadow-2xl">
            {/* Mapear las categorías */}
            {categories.map((category) => (
              <li
                key={category.key}
                onClick={() => {
                  setFilter(category.key);
                  setOpen(false);
                }}
                className="p-2 pl-5 hover:dark:bg-neutral-600 hover:bg-neutral-200 cursor-pointer"
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
