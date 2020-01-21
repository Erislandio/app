import React from "react";

export const UserContext = React.createContext();

export const userNotDefined = {
  User: {
    name: "",
    lastname: "",
    email: "",
    image: "",
    projects: [],
    tasks: []
  }
};
