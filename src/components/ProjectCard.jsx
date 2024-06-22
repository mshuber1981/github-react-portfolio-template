import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
  .card {
    height: var(--card-height);
    border: var(--border);
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) =>
      theme.name === "light" ? "" : "var(--bs-gray)"};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-img-top {
      height: 50%;
      object-fit: contain;
    }

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;

      &:hover {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) =>
        theme.name === "light" ? "" : "var(--bs-gray-dark)"};

      .card-link {
        color: ${({ theme }) =>
          theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};

        &:hover {
          color: var(--bs-primary);
        }
      }
    }

    &:hover {
      transform: scale(1.03);
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  demo: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const ProjectCard = ({ demo, description, image, name, url }) => {
  return (
    <StyledCard>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {demo !== (undefined && null && "") ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;
