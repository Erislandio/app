import React from "react";

export const DefaultButton = ({ disabled, id, type, children }) => (
  <span id={id} className="container-button">
    <button type={type} className="btn-default" disabled={disabled}>
      {disabled ? '...' : children}
    </button>
  </span>
);
