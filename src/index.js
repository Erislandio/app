import React from "react";
import ReactDOM from "react-dom";
import client from "./service/client";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import { ToastProvider } from "react-toast-notifications";
import './reset.css'

const Index = () => (
  <ApolloProvider client={client}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
