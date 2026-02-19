import Fullname from "../Fullname/Fullname"
import HeaderButtonList from "../HeaderButtonList/HeaderButtonList"
import "./header.css"
function Header(){
    return <header className="header-box">
        <Fullname firstName={"Eftychios"} lastName={"Marakakis"}/>
        <HeaderButtonList />
    </header>
}

export default Header