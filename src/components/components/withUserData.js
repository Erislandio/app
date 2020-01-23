import React, { useState } from "react";
import { getUserByEmail } from "../graphql/queries/getUserByEmail";
import { useQuery } from "@apollo/react-hooks";
import { Loading } from "./loading";
import { UserContext, userNotDefined } from "../context/userContext";
import { Header } from "../header/header";
import Drawer from "rc-drawer";
import { SideBar } from "../sidebar/sidebar";

export const WithUserData = React.memo(
  ({ component: Component, email, ...rest }) => {
    const [open, setOpen] = useState(true);

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
        <div id="main-container" className="main-container">
          <SideBar open={open} />
          <div id="main" className="main-content">
            <Header setOpen={setOpen} open={open} />
            {loading || !data ? (
              <Loading />
            ) : (
              <div className="main-component">
                <Component {...rest} user={data} />
              </div>
            )}
          </div>
        </div>
      </UserContext.Provider>
    );
  }
);
