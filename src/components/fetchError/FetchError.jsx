import React from "react";
import PropTypes from "prop-types";

const FetchError = ({ errorMessage, nextAction, label }) => {
  return (
    <div data-test="fetchErrorComponent">
      <p>{errorMessage}</p>
      <button onClick={nextAction}>{label}</button>
    </div>
  );
};

FetchError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  nextAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FetchError;
