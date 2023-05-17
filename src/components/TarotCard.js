import React from "react";

const TarotCard = ({card}) => {

    return(
        <>
            <img src={card.img} height="400"></img>
            <p>{card.name}</p>
            {/* <p>{card.keywords}</p> */}
        </>
    )
}

export default TarotCard