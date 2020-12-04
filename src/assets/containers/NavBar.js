import { useState, useEffect } from "react";
// https://react-bootstrap.github.io/components/navbar/
import { Form, Nav, Navbar } from "react-bootstrap";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";

// Image
import logo from "../images/logo.svg";

const NavBar = ({ theme, setTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const [themeLogo, setThemeLogo] = useState(<RiMoonClearFill />);

  const updateTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setTimeout(() => {
      setExpanded(false);
    }, 500);
  };

  useEffect(() => {
    theme === "dark"
      ? setThemeLogo(<RiMoonClearFill />)
      : setThemeLogo(<RiSunLine />);
  }, [theme]);

  return (
    <Navbar
      className={theme}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand href="#home">
        <img
          className="d-inline-block align-top"
          alt="React Logo"
          src={logo}
          width="45"
          height="45"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        // Set the expanded state with the toggle button
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="h4">
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
        <Form className="d-flex w-100 justify-content-end">
          <Form.Check
            id="custom-switch"
            className="text-white"
            type="switch"
            label={themeLogo}
            onChange={updateTheme}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
