import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import SortPage from './components/sortPage.jsx'

function RouteManager() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/sortingMethods" component={() => <SortPage sortTitle={'Sorting Methods'} />} />
      </div>
    </Router>
  );
}

export default RouteManager;