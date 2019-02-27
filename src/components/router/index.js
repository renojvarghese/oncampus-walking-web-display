import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";

import Dashboard from "../Dashboard";
import Login from "../Login";
import MapView from "../MapView";

export const AppRouter = () => (
    <Router>
      <div>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/map" exact component={MapView}/>
      </div>
    </Router>
);

export default AppRouter;
