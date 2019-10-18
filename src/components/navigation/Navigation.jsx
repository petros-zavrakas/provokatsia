import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav } from "./Navigation.styles";

const Navigation = ({ menuItems }) => {
  return (
    <Nav data-test="NavigationComponent">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={"item" + (index + 1)}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

Navigation.propTypes = {
  menuItem: PropTypes.array
};

export default Navigation;
