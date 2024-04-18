import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



export default function Footer(){
    return(
        <div className="fotter container">
            <FontAwesomeIcon icon={faCoffee} />

        </div>

    )
}