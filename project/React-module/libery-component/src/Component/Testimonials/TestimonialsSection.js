import React from "react";
import Testimonials from "./Testimonials";
import TestimonialsAuthor from "./TestimonialsAuthor";
import TestimonialsQuote from "./TestimonialsQuote";
import TestimonialsRole from "./TestimonialRole";

export default function TestimonialsSection(){
    return(
        <div className="container">
            <h2>Testimonials Component</h2>
        <Testimonials src={'avarta.jfif'} >
        <TestimonialsQuote >asdasdasd</TestimonialsQuote >
        <TestimonialsAuthor >asdasdada</TestimonialsAuthor >
        <TestimonialsRole>Hehehehehe</TestimonialsRole>  
        </Testimonials >

        <Testimonials  >
        <TestimonialsQuote >asdasdasd</TestimonialsQuote >
        <TestimonialsAuthor >asdasdada</TestimonialsAuthor >
        <TestimonialsRole>Hehehehehe</TestimonialsRole>  
        </Testimonials >
        </div>
        
    )
}
