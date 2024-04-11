import React from "react";

export default function Card(props) {
    return(
        <>
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Price ${props.price}</p>
        </div>

        </>
    )
}
