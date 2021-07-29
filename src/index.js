import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Context from "./context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Context>
    <StrictMode>
      <App />
    </StrictMode>
  </Context>,
  rootElement
);
