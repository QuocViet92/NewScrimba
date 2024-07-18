import {React,createContext} from "react";
import TestimonialsImg from "./TestimonialsImg";
import TestimonialsLogo from "./TestimonialsLogo";

const srcContext = createContext()


export default function Testimonials({children,src}){
    const classCard = src ?'testtimonials-card': "noimgCard"
    let contentCss = src ?'testtimonials-card-content' : 'test-card-content-noimg'
    return(
       < srcContext.Provider value={src}>
        <div className={classCard}>
            <div className="background-grid"></div>
           {src ? <TestimonialsImg src={src} /> : <TestimonialsLogo/>}
            <div className={contentCss}>
           {src && <div className="sizeText">"</div>}
               {children}
            </div>
        </div>
        </srcContext.Provider>
    )
} 
 export {srcContext}
