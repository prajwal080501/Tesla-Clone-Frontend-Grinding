import React, { useState } from "react";
import {
    CloseIcon,
  CloseWrapper,
  Container,
  Logo,
  Menu,
  MenuItem,
  RightMenu,
  SideBar,
} from "./HeaderElements";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <Logo to="/">
        <img src="/images/logo.svg" alt="" />
      </Logo>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <MenuItem key={index}>
              {car}
            </MenuItem>
          ))}
      </Menu>
      <RightMenu>
        <a title="model-s" to="">
          Shop{" "}
        </a>
        <a title="model-s" to="">
          Account{" "}
        </a>
        <a title="model-s" onClick={() => setIsOpen(true)} to="">
          Menu
        </a>
      </RightMenu>
      <SideBar show={isOpen}>
        <CloseWrapper>
          <CloseIcon onClick={() => setIsOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/existinginventory">{car}</a>
            </li>
          ))}

        <li>
          <a href="/model-y">Used Inventory</a>
        </li>
        <li>
          <a href="/existinginventory">Trade In</a>
        </li>
        <li>
          <a href="/existinginventory">Test Drive</a>
        </li>
        <li>
          <a href="/existinginventory">CyberTruck</a>
        </li>
        <li>
          <a href="/existinginventory">Roadster</a>
        </li>
        <li>
          <a href="/existinginventory">Semi</a>
        </li>
        <li>
          <a href="/existinginventory">Charging</a>
        </li>
        <li>
          <a href="/existinginventory">Powerwall</a>
        </li>
        <li>
          <a href="/existinginventory">Commercial Energy</a>
        </li>
        <li>
          <a href="/existinginventory">Utilities</a>
        </li>
        <li>
          <a href="/existinginventory">Find Us</a>
        </li>
        <li>
          <a href="/existinginventory">Support</a>
        </li>
        <li>
          <a href="/existinginventory">Investor Relations</a>
        </li>
      </SideBar>
    </Container>
  );
};

export default Header;
