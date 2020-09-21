import React from "react";
import "./styles.css";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import { ContextController } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <Router>
        <div className="background-pattern py-10">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </Router>
    </ContextController>
  );
};

export default App;
