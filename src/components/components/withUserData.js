import React from "react";
import { getUserByEmail } from "../graphql/queries/getUserByEmail";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "./loading";
import { UserContext, userNotDefined } from "../context/userContext";
import { Header } from "../header/header";

export const WithUserData = React.memo(
  ({ component: Component, email, ...rest }) => {
    const { data, loading, error } = useQuery(getUserByEmail, {
      variables: {
        email: email
      }
    });

    if (!email) {
      return <Component {...rest} />;
    }

    if (error) {
      return <div>Tivemos um problema ao carregar os dados...</div>;
    }

    return (
      <UserContext.Provider value={data ? data : userNotDefined}>
        <Header />
        {loading || !data ? <Loading /> : <Component {...rest} user={data} />}
      </UserContext.Provider>
    );
  }
);
