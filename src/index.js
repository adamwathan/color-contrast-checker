import React from "react";
import ReactDOM from "react-dom";
import Picker from "./picker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/:foreground?/:object?/:background?/:swatch4?/:swatch5?/:swatch6?/:swatch7?/:swatch8?/:swatch9?/:swatch10?"
          render={({ match }) => (
            <Picker
              foreground={match.params.foreground}
              object={match.params.object}
              background={match.params.background}
              swatches={[
                match.params.swatch4,
                match.params.swatch5,
                match.params.swatch6,
                match.params.swatch7,
                match.params.swatch8,
                match.params.swatch9,
                match.params.swatch10,
              ]}
            />
          )}
        />
        <div className="small-print source">
          Inspired by{" "}
          <a href="https://contrast-checker.glitch.me/">
            the GOV.uk contrast checker on glitch
          </a>
          , made with{" "}
          <a href="https://codesandbox.io/s/0053my42jp">CodeSandbox</a>. |{" "}
          <a href="https://github.com/richardbruskowski/color-contrast-checker">
            GitHub
          </a>{" "}
          | <a href="https://twitter.com/bruskowski">Twitter</a>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
