import React from "react";
import Card from "./CardsIndex";

export default function CardsSection(){
    return(
        <>
        <Card>
            <Card.Icon>this is icon</Card.Icon>
            <Card.Tittle>This is Tittle</Card.Tittle>
            <Card.Text> this is Text Cards</Card.Text>
        </Card>
        </>
    )
}