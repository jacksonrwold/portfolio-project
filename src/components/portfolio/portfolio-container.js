import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            stuff: "I'm stuff"
        }
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
                <h1>{this.state.stuff}</h1>

                {this.portfolioItems()}
            </div>
        )
    }
}