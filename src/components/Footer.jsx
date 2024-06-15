import React from "react";
// Styles
import styled from "styled-components";
// Components
import SocialLinks from "./SocialLinks";

// #region styled-components
const StyledFooter = styled.footer`
  height: calc(var(--nav-height) + 1rem);
  background: var(--primary);

  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;
// #endregion

// #region component
const Footer = () => {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
      <SocialLinks />
    </StyledFooter>
  );
};
// #endregion

export default Footer;
