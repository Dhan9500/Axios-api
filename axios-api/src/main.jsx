import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Converter from "./Converter.jsx";
import Context from "./Context.jsx";
import NoteState from "./context-api/NoteState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Converter/> */}
    <NoteState>
      <Context />
    </NoteState>
  </React.StrictMode>
);
