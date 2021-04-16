import React, {useState} from "react"
import { Link } from "react-router-dom"

export default function() {
    return (
        <div>
            <h2>That page does not exist</h2>
            <Link to="/">Return to homepage</Link>
        </div>
    )
}