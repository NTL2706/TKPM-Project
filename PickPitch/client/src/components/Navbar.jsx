import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setLogout, setMode } from "../state";
import {
  AppBar,
  // Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import profileImage from "../assets/img/profile.jpeg";
import logoImage from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="container">
        <Navbar.Brand href="/">
          <img src={logoImage} alt="Bootstrap" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">
              <button type="button" class="btn btn-light">
                Contact Us
              </button>
            </Nav.Link>
            <Nav.Link href="#">
              <button type="button" class="btn btn-light">
                Pitches
              </button>
            </Nav.Link>
          </Nav>
          <Nav
            className="my-2 my-lg-0 justify-content-end gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button variant="outline-success" href="/login" className="">
              Log In
            </Button>
            <Button variant="success">Book now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
