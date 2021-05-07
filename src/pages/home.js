import React from 'react'
import BottomSection from '../components/bottom'
import FafeSection from '../components/fafe'
import Hero from '../components/hero'
import Projects from '../components/pojects'
import Stack from '../components/stack'
import Study from '../components/study'

import '../styles/globalStyles.css'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero/>
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