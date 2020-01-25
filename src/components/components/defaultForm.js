import React from "react";
import './global.css'

export const DefaultForm = ({ id, onSubmit, children }) => (
  <form id={id} className="default-form" onSubmit={onSubmit}>
    {children}
  </form>
);
