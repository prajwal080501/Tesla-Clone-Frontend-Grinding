import React from 'react'
import { Container, Logo, Menu, MenuItem, RightMenu } from './HeaderElements'

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
                <MenuItem title="model-s" to="">Shop </MenuItem>
                <MenuItem title="model-s" to="">Account </MenuItem>
                <MenuItem title="model-s" to="">Menu</MenuItem>
            </RightMenu>
        </Container>
    )
}

export default Header
