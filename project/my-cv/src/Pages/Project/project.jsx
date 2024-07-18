import React from "react";
import { Link } from "react-router-dom";

export default function Project({src ,name ,type,id , ...props}){
    return (<>
       <div className="project-box" key={id}>
        <Link to={`/project/${id}`}>
       <img className="project-box-img" src={src} />
       <h4>Name  :<span> {name}</span></h4>
       <p>Type : <span>{type}</span> </p>
       <div className="shareCode">
        <p>live</p>
        <p>github</p>
       </div>
       </Link>
       </div>
       </>
    )
}