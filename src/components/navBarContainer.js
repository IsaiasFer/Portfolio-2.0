import React from 'react'
import Navbar from './navBar'

function NavBarContainer(props){
    return(
        <div className={props.classContainer}>
            <Navbar class='barra_navegación-principal'/>
        </div>
    )
}

export default NavBarContainer