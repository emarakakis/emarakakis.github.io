import { projectContent } from "../projectContent"
import ProjectItem from "../ProjectItem/ProjectItem"
function ProjectCard({card}){
    const data = projectContent[card]
    return <div>
        {data.map((item, index) => <ProjectItem data={item} key={index}/> )}
    </div>
}

export default ProjectCard