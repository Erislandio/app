import React from "react";

export const InputIcon = ({
  icon: IconComponent,
  onChange,
  required,
  value,
  placeholder,
  type,
  name
}) => (
  <div className="input-form">
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <span className="input-icon">
      <IconComponent size="15" />
    </span>
  </div>
);
