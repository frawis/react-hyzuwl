import React from "react";
import "./style.css";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/kurse" exact>
            <Coins />
          </Route>
          <Route path="/kurse/:id" exact>
            <CoinDetails />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
