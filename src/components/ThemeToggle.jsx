import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";

// #region styled-components
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.2rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;

  /* Hide defualt checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;
// #endregion

// #region functions
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
// #endregion

// #region component
const propTypes = {
  closeDelay: PropTypes.number,
  setExpanded: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const ThemeToggle = ({ closeDelay = 250, setExpanded, setTheme }) => {
  const theme = useSelector(selectMode);

  const toggleTheme = () => {
    const themType = theme === "light" ? "dark" : "light";
    setTheme(themType);
    setStoredTheme(themType);
  };

  return (
    <StyledSwitch
      onClick={() => {
        setTimeout(() => {
          setExpanded(false);
        }, closeDelay);
      }}
    >
      <input
        type="checkbox"
        aria-label={`Toggle theme, currently ${theme}.`}
        onClick={() => toggleTheme()}
      />
      <div>
        {theme === "light" ? (
          <Icon icon="game-icons:sunflower" />
        ) : (
          <Icon icon="game-icons:moon" />
        )}
      </div>
    </StyledSwitch>
  );
};

ThemeToggle.propTypes = propTypes;
// #endregion

export default ThemeToggle;
