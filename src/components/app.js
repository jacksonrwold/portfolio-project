import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from "./pages/no-match"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jackson React Starter</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <Router>
          <NavigationContainer />
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about-me" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route exact path="/portfolio/:slug" component={PortfolioDetail}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
