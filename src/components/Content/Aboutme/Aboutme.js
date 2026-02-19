import Panel from "../Panel/Panel"
import "./aboutme.css"
import { aboutMeTexts } from "./texts"
function Aboutme(){
    return <div className = "aboutme-container">
        <div className="aboutme-row">
            <Panel text={aboutMeTexts[0]} header={"Education"}/>
            <Panel text={aboutMeTexts[1]} header={"What I like"}/>
        </div>
        <div className="aboutme-row reverse">
            <Panel text={aboutMeTexts[2]} header={"Current Focus"}/>
            <Panel text={aboutMeTexts[3]} header={"Looking For"}/>
        </div>
    </div>
}

export default Aboutme