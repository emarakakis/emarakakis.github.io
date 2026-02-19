import "./fullname.css"

function Fullname({firstName, lastName}){
    return <div>
        <h1 className="header-fullname">{firstName} {lastName}</h1>
    </div>
}

export default Fullname