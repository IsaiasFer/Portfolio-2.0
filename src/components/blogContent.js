import React from 'react'

import Article from './blogArticle'

function BlogContent(){
    return(
        <section className="blogContent">
            <h3>
                Ultimas Entradas
            </h3>
            <div className="blog_content-articles">
                <Article image='https://i.imgur.com/3w92n12l.jpg' title='La importancia de tener pensamiento crítico' description='Nunca antes en la historia de la humanidad habiamos tenido tanta información para consumir... tener un espiritu crítico te ayudará a no caer en el lado oscuro de esta era'/>
            </div>
        </section>
    )
}

export default BlogContent