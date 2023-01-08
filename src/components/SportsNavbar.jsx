import "./Sportsbar.css";

import { menuItem } from "../data/sportsList";

// useSportsContext hook
import { useSportsContext } from "../hooks/useSportsContext";

const SportsNavbar = () => {
  const { selectedSports, dispatch } = useSportsContext();

  const handleClick = (selection) =>
    dispatch({ type: "CHANGE_SPORTS", payload: selection });

  return (
    <>
      <div className="sports-container">
        <div className="sportsbar">
          {menuItem.map((item, index) => (
            <li
              to={item.link}
              key={index}
              className="sports_id"
              value={item.title}
              onClick={() => handleClick(item.title)}
            >
              <div className="holder">
                <div id="sports_icon">{item.icon}</div>
              </div>
              <div id="sports_title">{item.title}</div>
              <div
                className={selectedSports === item.title ? "selected" : ""}
              ></div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default SportsNavbar;
