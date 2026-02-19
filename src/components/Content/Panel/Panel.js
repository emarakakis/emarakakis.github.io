import "./panel.css"

function Panel({text, header}){
    return <div className="outside">
        <h1>{header}</h1>
        <p>{text}</p>
    </div>
}

export default Panel