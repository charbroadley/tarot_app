import React from "react";

const PastCard = ({pastCard}) => {

    console.log(pastCard)
    const keywordsArray = pastCard.keywords.map((keyword) => {
        return <li>{keyword}</li>
    })


    return (
        <>
            <h4>The Past</h4>
            <p>This card represents events from your past that are still effecting you. This can either hold you back or help you to move forward. You can take things from your past and use them to your advantage.</p>

            <img src={pastCard.img} height="400"></img>
            <h4>{pastCard.name}</h4>
            <p>{keywordsArray}</p>
        </>
    )
}

export default PastCard