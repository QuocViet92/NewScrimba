import React from "react";



export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.item.imageUrl} alt={props.item.title}/>
            <div className="info">
                <div className="from">
                <i class="fa-solid fa-location-dot card-icon "></i>
                <p className="location">{props.item.location}</p>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <div className="date"><p>{props.item.startDate}-{props.item.endDate}</p></div>
                <p>{props.item.description}</p>
            </div>
        </div>  
    )
}