import React, { useState } from "react"

export default function() {
    const [loggedInStatus, setLoggedInStatus] = useState(true)
    
    return (
        <div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
            {loggedInStatus == true ? <button>Add Blog</button> : null}
        </div>
    )
}