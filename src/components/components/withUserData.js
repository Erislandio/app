import React from "react";
import { getUserByEmail } from "../graphql/queries/getUserByEmail";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "./loading";
import { UserContext } from "../context/userContext";

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

    if (loading || !data) {
      return <Loading />;
    }

    if (error) {
      return <div>Tivemos um problema ao carregar os dados...</div>;
    }

    return (
      <UserContext.Provider value={data}>
        <Component {...rest} user={data} />;
      </UserContext.Provider>
    );
  }
);
