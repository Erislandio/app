import React, { useState } from "react";
import { getUserByEmail } from "../graphql/queries/getUserByEmail";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "./loading";
import { UserContext, userNotDefined } from "../context/userContext";
import { Header } from "../header/header";
import Drawer from "rc-drawer";

export const WithUserData = React.memo(
  ({ component: Component, email, ...rest }) => {
    const [open, setOpen] = useState(false);

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
        <div>
          <Header setOpen={setOpen} open={open} />
          <Drawer width="300" open={open} onClose={() => setOpen(false)}>
            teste
          </Drawer>
        </div>
        {loading || !data ? <Loading /> : <Component {...rest} user={data} />}
      </UserContext.Provider>
    );
  }
);
