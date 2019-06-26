import React from "react";
import ReactDOM from "react-dom";

import Sorter from "./containers/Sorter";

import WebFont from "webfontloader";

import "./styles.css";

WebFont.load({
  google: {
    families: ["Nunito:400,700", "Monoton", "sans-serif"]
  }
});

function App() {
  return (
    <div className="App">
      <Sorter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
