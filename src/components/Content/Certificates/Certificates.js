import { useState } from "react"
import "./certificates.css"
import { certificatesContent } from "./certificatesContent"
import CertificateItem from "./CertificateItem/CertificateItem"

function Certificates(){
    const [page, setPage] = useState(1)
    const display = certificatesContent.slice((page - 1) * 3, page * 3)
    return <div className="certificates-panel">
        {display.map((cert, index) => <CertificateItem data={cert} key={index} />)}
        <div>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
        </div>
    </div>
}

export default Certificates