import React from "react";
import "./styles.css";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";
import { ContextController } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
      </Router>
    </ContextController>
  );
};

export default App;
