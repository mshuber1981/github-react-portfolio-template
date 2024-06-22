import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import Logo from "../images/logo.svg";
import { Light, Dark } from "../config";
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// #region styled-components
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--bs-primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--bs-primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${spin} infinite 20s linear;
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Light}) center center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary();

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">
              {name === null ? "null" : name}
            </h1>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-block">
            <img
              src={Logo}
              alt="React Logo"
              className="w-75 mx-auto hero-img"
            />
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
        <Button
          className="d-none"
          onClick={() =>
            showBoundary({
              name: "Error",
              message: "Simulated error message",
            })
          }
        >
          Simulate Error Boundary
        </Button>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
