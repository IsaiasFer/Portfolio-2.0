import React from "react";
import AboutMe from "../components/aboutMe";
import BottomSection from "../components/bottom";
import FafeSection from "../components/fafe";
import Hero from "../components/hero";
import Projects from "../components/pojects";
import Stack from "../components/stack";
import Study from "../components/study";
import Separador from "../components/separator";


import "../styles/scss/globalStyles.scss";
import "../styles/scss/homePage.scss";
import { desvanecimiento } from "../scripts/functions";

class Home extends React.Component {

  componentDidMount() {
    //Logica de como agregar nodos y colocarles atributos :)
    /* var projectLink=document.createElement("li")
    var projectLinkAnchor=document.createElement("a")
    var menu=document.querySelector(".lista_navegacion")
    projectLinkAnchor.append("Proyectos")
    projectLinkAnchor.setAttribute("href","#Projects")
    projectLink.append(projectLinkAnchor)
    menu.append(projectLink) */
    const projectLink=document.querySelector(".projectLink")
    projectLink.classList.remove("oculto")
    window.scroll(0, 0)
    desvanecimiento()
}
  componentWillUnmount(){
    const projectLink=document.querySelector(".projectLink")
    projectLink.classList.add("oculto")
    desvanecimiento()
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Separador color="white" bottom />
        <AboutMe />
        <Separador color="#0d7377" bottom />
        <FafeSection />
        <Stack />
        <Projects />
        <Study />
        <BottomSection />
      </React.Fragment>
    );
  }
}

export default Home;
