import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.scss";
import { EmailSignupForm, DualtoneCard, ToggleSwitch } from "./challenges";

const Home: React.FC<{}> = (): React.ReactElement => (
  <div>
    <h1>WISE INTROVERT</h1>
  </div>
);

const App: React.FC<{}> = (): React.ReactElement => (
  <Router>
    <Switch>
      <Route exact path={"/email-signup-form"} component={EmailSignupForm} />
      <Route exact path={"/dualtone-card"} component={DualtoneCard} />
      <Route exact path={"/toggle-switch"} component={ToggleSwitch} />
      <Route exact path={"*"} component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
