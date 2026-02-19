import Button from "../../../Button/Button"
import "./projectHeader.css"

function ProjectHeader({setCard}){
    
    return <div>
        <Button onClick={() => setCard("webDev")}>Web Development</Button>
        <Button onClick={() => setCard("gameDev")}>Game Development</Button>
        <Button onClick={() => setCard("devOps")}>DevOps</Button>
    </div>
}

export default ProjectHeader