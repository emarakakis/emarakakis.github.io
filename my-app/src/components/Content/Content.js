import { useContext } from "react"
import { PageView } from "../../context/context"
import Aboutme from "./Aboutme/Aboutme"
import Projects from "./Projects/Projects"
import Certificates from "./Certificates/Certificates"

function Content(){
    const {enabled} = useContext(PageView)
    
    return <div>
        {enabled === "aboutme" && <Aboutme />}
        {enabled === "projects" && <Projects />}
        {enabled === "certificates" && <Certificates />}
    </div>
}

export default Content