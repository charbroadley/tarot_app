import React from "react";
// import TarotList from "../components/TarotList";
import PastCard from "../components/PastCard";

const TarotBox = ({cards, pastCard, handlePastCard, handlePresentCard, handleFutureCard}) => {

    console.log("past card is... " + pastCard) // Working but [Object object]. Adding .name or [name] creates

    return (
        <>
            <h2>Let me read your cards</h2>
            <h3>How does it work?</h3>
            <p>A quick 3 card spread using the Major Arcana. One card each to represent your past, present and future.
            </p>
            <ol>
                <li>Click to shuffle the deck</li>
                <li>Click on each card for an interpretation of its meaning</li>
            </ol>

            <button onClick={handlePastCard}>SELECT PAST CARD</button>
            <button onClick={handlePresentCard}>SELECT PRESENT CARD</button>
            <button onClick={handleFutureCard}>SELECT FUTURE CARD</button>

            <hr/>
            {/* <PastCard pastCard={pastCard}/> */}
            {/* {selectedCountry && <CountryDetail country={selectedCountry}/>} */}
            {pastCard && <PastCard pastCard={pastCard}/>}
            {/* <p>{pastCard.name}</p> */}
            {/* <TarotList cards={cards}></TarotList> */}
        </>
    )
}

export default TarotBox