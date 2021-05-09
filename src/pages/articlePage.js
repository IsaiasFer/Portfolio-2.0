import React from 'react'
import NavBarContainer from '../components/navBarContainer'
import ArticleContent from '../components/articleContent'

function ArticlePage(){
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

export default ArticlePage