import {React,useContext} from "react";
import { srcContext } from "./Testimonials";


export default function TestimonialsRole({children}){
    const value = useContext(srcContext)
    return(
        <div className="test-role smalltest">{children}</div>
    )
}