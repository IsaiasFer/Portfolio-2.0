import React from 'react'
import AboutMe from '../components/aboutMe'
import BottomSection from '../components/bottom'
import FafeSection from '../components/fafe'
import Hero from '../components/hero'
import Projects from '../components/pojects'
import Stack from '../components/stack'
import Study from '../components/study'
import MenuIcon from '../components/menuIcon'
import Separador from '../components/separator'

import '../styles/scss/globalStyles.scss'
import '../styles/scss/homePage.scss'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MenuIcon/>
                <Hero/>
                <Separador color='white' bottom/>
                <AboutMe/>
                <Separador color='#0d7377' bottom/>
                <FafeSection/>
                <Stack/>
                <Projects/>
                <Study/>
                <BottomSection/>
            </React.Fragment>
        )
    }
}

export default Home