import React, { useState } from "react"

import PortfolioItem from "./portfolio-item"

function PortfolioContainer() {
    const [pageTitle, setPageTitle] = useState("Welcome to my portfolio");
    const [data, setData] = useState([
        { title: "Quip", category: "eCommerce" },
        { title: "Eventbrite", category: "Scheduling" },
        { title: "Ministry Safe", category: "Enterprise" },
        { title: "SwingAway", category: "eCommerce" }
    ])

    function portfolioItems() {
        return data.map(item => {
            return <PortfolioItem title={item.title} url="google.com"/>
        });
    }

    function handlePageTitleUpdate() {
        setPageTitle("Something Else");
    }

    function handleFilter(filter) {
        setData(data.filter(item => {
            return item.category === filter;
        }));
    }

    return (
        <div>
            <h1>{pageTitle}</h1>

            <button onClick={() => handleFilter("eCommerce")}>eCommerce</button>
            <button onClick={() => handleFilter("Scheduling")}>Scheduling</button>
            <button onClick={() => handleFilter("Enterprise")}>Enterprise</button>

            {portfolioItems()}
        </div>
    )
}

export default PortfolioContainer