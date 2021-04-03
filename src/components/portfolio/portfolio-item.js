import React from "react";

export default function(props) {
    function flipParentState(props) {
        console.log(props)
        if (props.parentState == "I'm stuff") {
            props.updateParentState("I'm not stuff")
        } else if (props.parentState == "I'm not stuff") {
            props.updateParentState("I'm stuff")
        }
    }
    
    return (
        <div>
            <h1>{props.name}</h1>

            <button onClick={() => flipParentState(props)}>Update Parent State</button>
        </div>
    )
}