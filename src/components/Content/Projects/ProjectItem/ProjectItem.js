import "./projectItem.css"

function ProjectItem({data}){
    const{title, description, deliverables, used} = data
    
    return <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
        {deliverables.map((del, index) => <li key={index}>{del}</li>)}
        </ul>
        <ul>
            {used.map((use, index) => <li key={index}>{use}</li>)}
        </ul>
    </div>
}

export default ProjectItem