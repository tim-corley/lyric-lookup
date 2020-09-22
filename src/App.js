import React from "react";
import "./styles.css";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";
import { ContextController } from "./context";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <HashRouter basename="/">
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route exact path="/lyrics/track/:id" component={Lyrics} />
      </HashRouter>
    </ContextController>
  );
};

export default App;
