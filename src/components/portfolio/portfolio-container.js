import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Hello");
    }
    
    portfolioItems() {
        const data = ["Quip", "Eventbrite", "Ministry Safe"]

        return data.map(item => {
            return <PortfolioItem name={item}/>
        })
    }

    render() {
        return (
            <div>
                {this.portfolioItems()}
            </div>
        )
    }
}