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
        <div className=" h-screen background-pattern">
          <Navbar />
          <div className="lg:w-3/4 w-11/12 m-auto mt-8 h-64 bg-white bg-opacity-50 rounded shadow-lg">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </div>
      </Router>
    </ContextController>
  );
};

export default App;
