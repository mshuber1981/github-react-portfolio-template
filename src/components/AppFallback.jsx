import React from "react";
// State
import PropTypes from "prop-types";
// Components
import { Container } from "react-bootstrap";
// Utils
import { getPreferredTheme, setTheme } from "../utils";

// #region component
const propTypes = { error: PropTypes.object.isRequired };

const AppFallback = ({ error }) => {
  React.useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  return (
    <main className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <Container className="text-center">
        <p>Something went wrong:</p>
        <pre
          className="text-wrap"
          style={{ color: "red" }}
        >{`${error.name}: ${error.message}`}</pre>
      </Container>
    </main>
  );
};

AppFallback.propTypes = propTypes;
// #endregion

export default AppFallback;
