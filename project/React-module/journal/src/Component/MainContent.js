import React from "react";
import Card from "./Card";
import data from "../data";


export default function MainContent(){
    const cards = data.map(item =>{
        return <Card
                item={item}
        />
    })
    return(
        <main>
            {cards}

        </main>
    )
}