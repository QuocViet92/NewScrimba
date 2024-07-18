import React from "react";
import { data } from "./Data";

const BannerContext = React.createContext()

export default function Banner({children,theme = "warning"}){

    let dataBanner = data[theme]
    if(!dataBanner){
        dataBanner =data["warning"]
    }

    const styles ={
        backgroundColor : dataBanner.backgroundColor
    }
    const iconColor = {
        color : dataBanner.iconColor
    }

    console.log(dataBanner)
    return(
        <BannerContext.Provider value={{...data[theme]}}>
        <div className="banner" style={styles}>
        <div className="icon-banner" style={iconColor}>{dataBanner.icon}</div>
        <div className='content-banner'>
        {children}
        </div>
        </div>
        </BannerContext.Provider>
    )
}
export  {BannerContext}