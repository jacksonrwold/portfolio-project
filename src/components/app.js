import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Jackson React Starter</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer index="0"/>
        <PortfolioContainer index="1"/>
      </div>
    );
  }
}
