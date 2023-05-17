import React from "react";
import TarotCard from "./TarotCard";

const TarotList = ({cards}) => {

    const cardsArray = cards.map((card) => {
        return (
        <TarotCard card={card} key={card.number}/>
        )
    })

    return(
        <>
            {cardsArray}
        </>
    )
}

export default TarotList