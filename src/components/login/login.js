import React, { useState } from "react";
import "./login.css";
import { IoIosMail, IoIosLock, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { InputIcon } from "../components/inputIcon";
import { login } from "../graphql/mutations/auth";
import { useMutation } from "@apollo/react-hooks";
import { getErrorMutation } from "../../utils/getErrorMutation";
import { useToasts } from "react-toast-notifications";
import cookie from "js-cookie";

export const Login = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { addToast } = useToasts();

  const [LOGIN, { loading }] = useMutation(login);

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    LOGIN({
      variables: {
        ...user
      }
    })
      .then(({ data }) => {
        cookie.set("user", JSON.stringify(data));
        history.push("/dashboard");
      })
      .catch(res => {
        const message = getErrorMutation(res);
        addToast(message, { appearance: "error", autoDismissTimeout: 4000 });
      });
  };

  return (
    <div id="login-content">
      <div className="login-wrap">
        <div className="login-logo">
          <img
            src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
            alt="task-logo"
          />
        </div>
        <form className="validate-form" onSubmit={handleSubmit}>
          <span className="form-title">
            <font>Login</font>
          </span>
          <InputIcon
            icon={IoIosMail}
            required
            name="email"
            type="email"
            placeholder="email"
            value={user.email}
            onChange={handleChange}
          />
          <InputIcon
            icon={IoIosLock}
            required
            type="password"
            name="password"
            placeholder="senha"
            value={user.password}
            onChange={handleChange}
          />
          <div className="button-form">
            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>
          <div className="text-link">
            <Link to="/signin">Criar conta</Link>
            <IoIosArrowRoundForward size="20" />
          </div>
        </form>
      </div>
    </div>
  );
};
