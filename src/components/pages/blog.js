import React, {useState} from "react"
import { Link } from "react-router-dom"

export default function() {
    return (
        <div>
            <h2>Blog Page</h2>

            <div>
                <Link to="/about-me">Learn more about me</Link>
            </div>
        </div>
    )
}