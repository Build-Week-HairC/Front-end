import React from "react";

const RyanMedCard = (props) => {

    return (

        <div className="weed-box">
            <div className="weed-list">
                <h2>Name: {props.strain}</h2>
                <p>Type: {props.type}</p>
                <p>Strain: {props.strain}</p>
                <p>Effecs: {props.effects}</p>
            </div>
        </div>
    )

}

export default RyanMedCard;