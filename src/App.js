import React from "react";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import { ContextController } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="lg:w-3/4 m-auto mt-8">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;
