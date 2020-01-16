import React from "react";
import ReactDOM from "react-dom";
import client from "./service/client";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";

const Index = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
