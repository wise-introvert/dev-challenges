import * as React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App: React.FC<{}> = (): React.ReactElement => (
  <div>
    <h1>APP</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
