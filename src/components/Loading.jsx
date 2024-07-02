// Styles
import styled, { keyframes } from "styled-components";

// #region styled-components
const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`;

const Loading = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: var(--bs-primary);
  margin: 1rem auto;
  animation: ${spin} 0.6s linear infinite;
`;
// #endregion

export default Loading;
