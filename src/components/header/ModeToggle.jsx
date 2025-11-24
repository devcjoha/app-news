import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";

function ModeToggle({ handleToggle, darkMode }) {
  return (
    <>
      <div
        className="button-mode-container w-8  cursor-pointer"
      >
        <button onClick={handleToggle} className="button-mode">
          <img src={darkMode ? iconSun : iconMoon} alt="icon-mode" />
        </button>
      </div>
    </>
  );
}
export default ModeToggle;
