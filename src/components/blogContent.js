import React from 'react'

import '../styles/blogContent.css'
import Article from './blogArticle'

function BlogContent(){
    return(
        <section className="blogContent">
            <h3>
                Ultimas Entradas
            </h3>
            <div className="blog_content-articles">
                <Article image='https://i.imgur.com/3w92n12.jpg' title='Como me convertí en icono pop' description='La vida suele ser muy dura, pero para mi fue muy muy facil, aqui les cuento mi historia'/>
                    <Article image='https://ichef.bbci.co.uk/news/640/cpsprodpb/11426/production/_118249607_gettyimages-1315012739.jpg' title='Sirve protestar?' description='La vida suele ser muy dura, pero para mi fue muy muy facil, aqui les cuento mi historia'/>
                <Article image='https://i.imgur.com/KuyyIqP.jpgg' title='Autobus o Auto?' description='La vida suele ser muy dura, pero para mi fue muy muy facil, aqui les cuento mi historia'/>
            </div>
        </section>
    )
}

export default BlogContent