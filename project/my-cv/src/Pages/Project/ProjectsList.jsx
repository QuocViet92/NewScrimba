import React from "react";
import Project from "./project";

export default function ProjectList(){
    const [projects, setProjects] = React.useState([])
    const [count,setCount] = React.useState(4)
    function handleClick(){
        setCount((prev) => prev +4)
    }
    React.useEffect(()=>{
        fetch("/api/project")
        .then(res => res.json())
        .then(data => setProjects(data.projects))
},[])
const element = projects.slice(0,count).map(item => {
   return  <Project id={item.id} src={item.imageUrl} name={item.name} type={item.type} />
})
React.useEffect(()=>{
   console.log(projects)
},[projects])
    return(
        <div>
            <h1>Project</h1>
        <div className="projects-list">
        {element}
        </div>
        {count < projects.length &&
        (<button onClick={handleClick}>xem Thêm</button>)
}
        </div>
    )
}