import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-scroll";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { ToggleSwitch, FixedNavSpacer } from "./globalStyledComponents";
// Images
import Logo from "../images/logo.svg";

export default function NavBar() {
  const [isExpanded, setExpanded] = React.useState(false);
  const { theme } = useAppContext();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top bg-dark rounded-circle nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!isExpanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to={"Home"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"About"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                >
                  About Me
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Skills"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                >
                  Skills
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Projects"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                >
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Contact"}
                  spy={true}
                  // offset={-80}
                  activeClass="active"
                  className="nav-link"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 250)
                  }
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <ToggleSwitch />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
