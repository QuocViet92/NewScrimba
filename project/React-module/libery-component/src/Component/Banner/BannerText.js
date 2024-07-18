import React, { useContext } from "react";
import {BannerContext} from './Banner'



export default function BannerText({children}){
    const {textColor} = useContext(BannerContext)
    const styles ={
        color: textColor
    }
    return(
        <div style={styles}>{children}</div>
    )
}