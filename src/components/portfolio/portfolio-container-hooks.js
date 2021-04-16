import React, { useEffect, useState } from "react"
import axios from "axios"

import PortfolioItem from "./portfolio-item"

function PortfolioContainer() {
    const [pageTitle, setPageTitle] = useState("Welcome to my portfolio");

    const [isLoading, setIsLoading] = useState(true)

    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const [data, setData] = useState([{ name:"Loading...", url:"Loading"}])

    useEffect(() => {
        axios
          .get("https://jacksonrwolddev.devcamp.space/portfolio/portfolio_items")
          .then(response => {
            console.log(response)
            console.log(response.data.portfolio_items)
            setData(response.data.portfolio_items)
          })
          .catch(error => {
            console.log(error)
          })
    }, []) 

    function portfolioItems() {
        return data.map(item => {
            return <PortfolioItem key={item.id} title={item.name} slug={item.id} />
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