import React from "react";
import { Link } from "react-router-dom"

export default function(props) {
    return (
        <div>
            {props.title === "Loading..." ? null : 
            
            <div>
                <h1>{props.title}</h1>
                <Link to={`portfolio/${props.slug}`}>Link</Link>
            </div>
            
            }
        </div>
    )
}