import React, { useState } from "react";
import {
  IoIosMail,
  IoIosLock,
  IoIosArrowRoundForward,
  IoIosPerson,
  IoIosInformation
} from "react-icons/io";
import { Link } from "react-router-dom";
import { InputIcon } from "../components/inputIcon";
import { createUser } from "../graphql/mutations/createUser";
import { useMutation } from "@apollo/react-hooks";
import { getErrorMutation } from "../../utils/getErrorMutation";
import { useToasts } from "react-toast-notifications";
import cookie from "js-cookie";

export const Signin = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: ""
  });

  const { addToast } = useToasts();

  const [CREATE, { loading }] = useMutation(createUser);

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    CREATE({
      variables: {
        ...user
      }
    })
      .then(({ data }) => {
        if (data.createUser) {
          cookie.set("user", JSON.stringify(user.email));
          history.push("/dashboard");
        } else {
          addToast("Não foi possível acessar, tente novamente", {
            appearance: "error",
            autoDismissTimeout: 4000
          });
        }
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
            <font>Cadastre-se</font>
          </span>
          <InputIcon
            icon={IoIosMail}
            required
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <InputIcon
            icon={IoIosPerson}
            required
            name="name"
            type="text"
            placeholder="Nome"
            value={user.name}
            onChange={handleChange}
          />
          <InputIcon
            icon={IoIosInformation}
            required={false}
            name="lastname"
            type="text"
            placeholder="Sobrenome"
            value={user.lastname}
            onChange={handleChange}
          />
          <InputIcon
            icon={IoIosLock}
            required
            type="password"
            name="password"
            placeholder="Senha"
            value={user.password}
            onChange={handleChange}
          />
          <div className="button-form">
            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
          <div className="text-link">
            <Link to="/login">Login</Link>
            <IoIosArrowRoundForward size="20" />
          </div>
        </form>
      </div>
    </div>
  );
};
