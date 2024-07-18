import React from "react";

export default function TestimonialsImg({src}){
    console.log(src)
    return (
        <div className="testtimonials-card-img">
            <img src={src} alt="abc" ></img>
            </div>
    )
}