import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <section className="footer">
            <h3><Link to="/"><sup>©</sup>Isaias Fernandez 2021 - Todos los derechos reservados</Link></h3>
        </section>
    )
}

export default Footer