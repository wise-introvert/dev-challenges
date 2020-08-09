import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";
import { EmailSignupForm } from "./challenges";

const App: React.FC<{}> = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route exact path={"/email-signup-form"} component={EmailSignupForm} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
