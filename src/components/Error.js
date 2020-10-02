import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return null;
  }
  if (message) {
    return <div className="error-text">{message}</div>;
  }
  return null;
};

export default Error;
