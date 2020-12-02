import React from "react";
import "./style.css";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import Liga from "./pages/Liga";
import CoinDetails from "./pages/CoinDetails";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <React.Suspense fallback={<p>Loading...</p>}>
        <nav className="flex space-x-2">
          <div>
            <Link to="/liga">Liga</Link>
          </div>
        </nav>
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
          <Route path="/liga" exact>
            <Liga />
          </Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
}
