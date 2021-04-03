import React, { useState } from "react"

import PortfolioItem from "./portfolio-item"

function PortfolioContainer() {
    const [stuff, setStuff] = useState("I'm stuff");

    const portfolioItems = () => {
        const data = ["Quip", "Eventbrite", "Ministry Safe"]

        return data.map(item => {
            return <PortfolioItem name={item}/>
        })
    }

    return (
        <div>
            <h1>{stuff}</h1>

            {portfolioItems()}
        </div>
    )
}

export default PortfolioContainer