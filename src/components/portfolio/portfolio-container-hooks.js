import React, { useState } from "react"

import PortfolioItem from "./portfolio-item"

function PortfolioContainer() {
    const [pageTitle, setPageTitle] = useState("Welcome to my portfolio");
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [data, setData] = useState([
        { title: "Quip", category: "eCommerce", slug: "quip" },
        { title: "Eventbrite", category: "Scheduling", slug: "eventbrite"  },
        { title: "Ministry Safe", category: "Enterprise", slug: "ministry-safe"  },
        { title: "SwingAway", category: "eCommerce", slug: "swingaway"  }
    ])
    

    function portfolioItems() {
        return data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug} />
        });
    }

    function handleFilter(filter) {
        setSearch(data.filter(item => {
            return item.category === filter;
        }));
        setIsSearching(true)
    }

    function filteredPortfolioItems() {
        return search.map(item => {
            return <PortfolioItem title={item.title} url="google.com"/>
        })
    }

    return (
        <div>
            <h1>{pageTitle}</h1>

            <button onClick={() => handleFilter("eCommerce")}>eCommerce</button>
            <button onClick={() => handleFilter("Scheduling")}>Scheduling</button>
            <button onClick={() => handleFilter("Enterprise")}>Enterprise</button>
            <button onClick={() => setIsSearching(false)}>Clear Search</button>

            { isSearching ? filteredPortfolioItems() : portfolioItems() }
        </div>
    )
}

export default PortfolioContainer