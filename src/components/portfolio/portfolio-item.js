import React from "react";
import { Link } from "react-router-dom"

export default function(props) {
    return (
        <div>
            <h1>{props.title}</h1>

            {props.title === "Loading..." ? null : <Link to={`portfolio/${props.slug}`}>Link</Link>}
        </div>
    )
}