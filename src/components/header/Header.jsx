import React from "react";
import Navigation from "../navigation/Navigation";
import {
  HeaderContainer,
  Logo,
  HeaderImage,
  Menu,
  TeamTitle
} from "./Header.styles";
import logo from "../../assets/images/logo.png";
import headerImage from "../../assets/images/header.png";

const Header = () => {
  const menuItems = [
    { label: "Events", path: "/events" },
    { label: "Team", path: "/team" }
  ];
  return (
    <HeaderContainer data-test="headerComponent">
      <HeaderImage>
        <img src={headerImage} alt="provokatsia header image" />
      </HeaderImage>
      <Menu>
        <TeamTitle>
          Provokatsia<span> Artistani Team</span>
        </TeamTitle>
        <Logo data-test="logo">
          <img src={logo} alt="provokatsia logo" />
        </Logo>
        <Navigation menuItems={menuItems} data-test="main-menu" />
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
