import React from "react";
import classnames from "classnames"
import { themes } from "./data";

export default function Badge({children,shape, colors, ...rest }){
    if(!themes[colors]){
        colors = "gray"
    }
    let shapeClass = shape ? shape : 'Square'
    let styles={
        color: colors ? themes[colors].color : "" ,
        backgroundColor: colors ? themes[colors].background : ''
    }
    

    const allClasses=classnames(shapeClass,'badge')
    return(
    
        
            <div className={allClasses}{...rest} style={styles} >
                {children}
            </div>
        
    )
}