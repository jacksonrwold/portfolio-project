import React, { Component } from "react";

const data = [
    { "name": "Jackson", "age": 18},
    { "name": "Makenna", "age": "Old"}
]

//const getName = () => {
//    return data[this.props.index]["name"]
//}

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>{data[this.props.index]["name"]} is {data[this.props.index]["age"]}</h2>
            </div>
        )
    }
}