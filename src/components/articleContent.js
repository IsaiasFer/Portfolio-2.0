import React from 'react'
import Icon from '../components/icon.js'

function ArticleContent(){
    return(
        <section className="article">
            <div className="article_title">
                <h1>
                    Como realizar Hidromiel sin fracasar en el intento
                </h1>
            </div>
            <div className="article_data">
                <div className="article_data1">
                    <div className="article_author-image">
                        <img src="https://s.gravatar.com/avatar/66d4f77ff63aa4f0fb5523c5aeab92c7?s=80" alt="" />
                    </div>
                    <div className="article_author">
                        Isaias Fernandez
                    </div> 
                    <div className="article_date">
                        May 8, 2021
                    </div>
                </div>
                <div className="article_data2">
                    <div className="article_readTime">
                        5 min read
                    </div>
                </div>
            </div>
            <div className="article_image-principal">
                <img src="https://i.imgur.com/3w92n12.jpg" alt="" />
            </div>
            <div className="article_content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit ab illo porro corporis, sed explicabo enim accusantium. Error neque iusto perferendis incidunt a corrupti ipsa sint assumenda quae laborum?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum voluptatibus harum temporibus excepturi necessitatibus quia praesentium, iusto facilis! Ad doloribus nam iusto distinctio tenetur dolorem veniam harum officiis mollitia.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam porro cum ex fuga? Libero repudiandae nemo voluptates, laboriosam eum, tempora perferendis minus temporibus incidunt, ipsam hic beatae consectetur quos pariatur.
                </p>
            </div>
            <div className="article_tags">
                <h5>inspiration</h5>
                <h5>inspiration</h5>
                <h5>inspiration</h5>
            </div>
            <div className="shareSection">
                <h3>Compartir</h3>
                <div className="social_icons-share">
                    
                </div>
                <h3>Cuentame que te pareció este ariculo <a target='blank' href="https://twitter.com/IsaiasFer4">Aquí</a></h3>
            </div>
        </section>
    )
}

export default ArticleContent