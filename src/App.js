import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Featured from "./Featured";
import Korean from "./Korean";
import English from "./English";
import Album from "./Album";
import Footer from "./Footer";
// import SpotifyWebApi from "spotify-web-api-js";

// const spotify = new SpotifyWebApi();

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/featured">
            <Header />
            <Featured />
            <Footer />
          </Route>
          <Route path="/korean">
            <Header />
            <Korean />
            <Footer />
          </Route>
          <Route path="/english">
            <Header />
            <English />
            <Footer />
          </Route>
          <Route path="/album">
            <Header />
            <Album />
            <Footer />
          </Route>
          {/* This is the default path */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
