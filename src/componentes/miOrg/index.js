import { useState } from "react"
import "./style.css"

const MiOrg = (props) =>{

   // const [mostrar, actualizarmostrar] = useState(true)
    
    //const manejarClick = () => {
    //    console.log("mostrat / ocultar elemento", !mostrar)
    //    actualizarmostrar(!mostrar)
    //}

    return <section className="orgSection">

        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        
    </section>
}

export default MiOrg