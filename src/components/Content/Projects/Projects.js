import ProjectHeader from "./ProjectHeader/ProjectHeader"
import ProjectCard from "./ProjectCard/ProjectCard"
import "./projects.css"
import { useState } from "react"
function Projects(){
    const [card, setCard] = useState("webDev")
    console.log(card)
    return <div className="projects">
        <ProjectHeader setCard={setCard}/>
        <ProjectCard card = {card}/>
    </div>
}

export default Projects