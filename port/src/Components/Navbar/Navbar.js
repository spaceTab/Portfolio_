import React from "react";
import { Navbar, NavItem } from 'react-materialize'
import "./Navbar.css";

const Nav = () => (
    <Navbar brand={<a />} alignLinks="right">
        <NavItem href="">
            Getting started
</NavItem>
        <NavItem href="components.html">
            Components
</NavItem>
    </Navbar>
)
export default Nav;
s