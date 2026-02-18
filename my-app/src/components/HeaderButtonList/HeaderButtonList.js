import { useContext } from "react"
import Button from "../Button/Button"
import { buttonList } from "./buttonList"
import "./headerButtonList.css"
import { PageView } from "../../context/context"

function HeaderButtonList(){
    const {setEnabled} = useContext(PageView)
    return <div className="button-list">
        {buttonList.map((text) => 
            <Button className="header-button" key={text} onClick={() => {
                setEnabled(
            text
                .toLowerCase()
                .replace(" ",""))
            }}>{text}</Button>
        )}
    </div>
}

export default HeaderButtonList