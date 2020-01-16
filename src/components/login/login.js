import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  return (
    <div id="login-content">
      <div className="login-wrap">
        <div className="login-logo">
          <img
            src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
            alt="task-logo"
          />
        </div>
        <form />
      </div>
    </div>
  );
};
