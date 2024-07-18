import React from "react";
import {BannerContext} from './Banner'


export default function BannerTittle({children}){
    const {titleColor} = React.useContext(BannerContext)
    const styles={
        color: titleColor
    }
    return(
        <div style={styles}>{children}</div>
    )
}