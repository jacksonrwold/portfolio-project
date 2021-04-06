import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function() {
    const [loggedInStatus, setLoggedInStatus] = useState(true)
    
    return (
        <div>
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
            <NavLink exact to="/about-me" activeClassName="nav-link-active">About</NavLink>
            <NavLink exact to="/contact" activeClassName="nav-link-active">Contact</NavLink>
            <NavLink exact to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            {loggedInStatus == true ? <button>Add Blog</button> : null}
        </div>
    )
}