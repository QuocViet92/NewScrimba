import React from "react";
import Banner from "./Banner";
import BannerTittle from "./BannerTittle";
import BannerText from "./BannerText";
import { data } from "./Data";

export default function BannerSection(){
    const BannerSectionEl =Object.entries(data).map(([key,value]) => {
        return <div className="demo-banner"> {<Banner theme= {key} >
        <BannerTittle>{value.title}</BannerTittle>
        <BannerText>{value.text}</BannerText> 
        </Banner>}
        </div>
        
    })
    return(
        <>
        <div className="container">
        <h2>Banner Component</h2>
            {BannerSectionEl}
        </div>
        </>
    )
}