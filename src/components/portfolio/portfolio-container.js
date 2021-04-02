import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"

const data = [
    { "name": "Jackson", "age": 18},
    { "name": "Makenna", "age": "Old"}
]


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Hello");
    }
    
    render() {
        const getName = () => {
            return data[this.props.index]["name"];
        }

        const getAge = () => {
            return data[this.props.index]["age"];
        }

        return (
            <div>
                <PortfolioItem />
                <h2>{getName()} is {getAge()}</h2>
            </div>
        )
    }
}