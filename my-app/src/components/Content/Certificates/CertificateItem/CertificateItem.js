import "./certificateItem.css"

function CertificateItem({data}){
    const {title, description, skills, image_url, cert_url} = data
    return <div className="certificate-item">
        <h1 className="certificate-item-title">{title}</h1>
        <a href={cert_url}>Credentials</a>
        <div className="certificate-item-row">
            <div className="cir-left">
                <img src={image_url} alt="Certificate Image"/>
            </div>
        <div className="cir-right">
            <p>{description}</p>
            <ul>Skills:
                {skills.map((skill, index)=><li key={index}>{skill}</li>)}
            </ul>
        </div>
        
        </div> 
    </div>
}

export default CertificateItem