import React from 'react'
import AboutMe from '../components/aboutMe'
import BottomSection from '../components/bottom'
import FafeSection from '../components/fafe'
import Hero from '../components/hero'
import Projects from '../components/pojects'
import Stack from '../components/stack'
import Study from '../components/study'
import MenuIcon from '../components/menuIcon'

import '../styles/css/globalStyles.css'
import '../styles/css/homePage.css'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MenuIcon/>
                <Hero/>
                <AboutMe/>
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