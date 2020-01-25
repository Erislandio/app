import React from "react";

export const DefaultInput = ({
  label,
  id,
  onChange,
  placeholder,
  name,
  type,
  required,
  value
}) => (
  <span id={id} className="container-input">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className="input-default"
      required={required}
      value={value}
    />
  </span>
);
