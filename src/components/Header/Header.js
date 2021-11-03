import React from 'react'
import { CloseIcon, Container, Logo, Menu, MenuItem, RightMenu, SideBar } from './HeaderElements'

const Header = () => {
    return (
        <Container>
            <Logo to="/">
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <Menu>
                <MenuItem to="model-s" >Model S</MenuItem>
                <MenuItem to="/model-y" >Model Y</MenuItem>
                <MenuItem to="model-s" >Model X</MenuItem>
                <MenuItem to="model-s" >Model 3</MenuItem>
                <MenuItem to="model-s">Solar Roof</MenuItem>
                <MenuItem to="model-s">Solar Panels</MenuItem>
            </Menu>
            <RightMenu>
                <a title="model-s" to="">Shop </a>
                <a title="model-s" to="">Account </a>
                <a title="model-s" to="">Menu</a>
            </RightMenu>
            <SideBar>
                <CloseIcon />
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade In</li>
                <li>Test Drive</li>
                <li>CyberTruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
                <li>Investor Relations</li>
            </SideBar>
        </Container>
    )
}

export default Header
