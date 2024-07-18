import { useParams, Link, NavLink } from "react-router-dom"
import React from "react"

export default function ProjectDetail(){
    const { id } = useParams() 
    console.log(id) 

    const [currentProject, setCurrentProject] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/project/${id}`) //
            .then(res => res.json())
            .then(data => setCurrentProject(data.projects)) 
            .catch(error => console.error('Error fetching project:', error))
    }, [id]) 
    React.useEffect(() => {
        console.log(currentProject)
    }, [currentProject])

    if (!currentProject) {
        return <h1>Loading</h1>
    }

    return (
        <div className="project-detail">
           <NavLink to={`/project`} className="back-link">Back to all</NavLink>
            <img src={currentProject.imageUrl} />
            <h2>{currentProject.id}</h2>
            <h1>{currentProject.name}</h1>
            <p>Type : {currentProject.type}</p>
            <p>{currentProject.description}</p>
            <div className="shareCode">
            <h4>Live</h4>
            <h4>Github</h4>
            </div>
        </div>
    )
}
