import React from 'react'
import NavBarContainer from '../components/navBarContainer'
import ArticleContent from '../components/articleContent'
import "../styles/scss/articlePage.scss"

class ArticlePage extends React.Component{
   
    componentDidMount(){
    var menu=document.querySelector(".menu");
    window.scroll(0, 0);
        menu.classList.add("menuReverse")
    }
    componentWillUnmount(){
        var menu=document.querySelector(".menu");
            menu.classList.remove("menuReverse")
        }
    render(){
        return(
            <React.Fragment>
            <NavBarContainer
            classContainer="navBar_container"
            class="barra_navegación"
            />
            <ArticleContent/>
            </React.Fragment>
            )
        }
}

export default ArticlePage