import React from "react";

import ArticleTag from "./articleTag.js";
import ShareLink from "./ShareLink.js";

function ArticleContent() {
  return (
    <section className="article">
      <div className="article_title">
        <h1>La importancia de tener pensamiento crítico</h1>
      </div>
      <div className="article_data">
        <div className="article_data1">
          <div className="article_author-image">
            <img
              src="https://s.gravatar.com/avatar/66d4f77ff63aa4f0fb5523c5aeab92c7?s=80"
              alt=""
            />
          </div>
          <div className="article_author">Isaias Fernandez</div>
          <div className="article_date">May 17, 2021</div>
        </div>
        <div className="article_data2">
          <div className="article_readTime">5 min read</div>
        </div>
      </div>
      <figure className="article_image-principal">
        <img src="https://i.imgur.com/3w92n12l.jpg" alt="" />
      </figure>
      <div className="article_content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt et ab sint iusto asperiores debitis veritatis, possimus temporibus. Nemo consectetur fuga deleniti sapiente cum repudiandae perspiciatis ratione eligendi similique!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt et ab sint iusto asperiores debitis veritatis, possimus temporibus. Nemo consectetur fuga deleniti sapiente cum repudiandae perspiciatis ratione eligendi similique!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt et ab sint iusto asperiores debitis veritatis, possimus temporibus. Nemo consectetur fuga deleniti sapiente cum repudiandae perspiciatis ratione eligendi similique!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt et ab sint iusto asperiores debitis veritatis, possimus temporibus. Nemo consectetur fuga deleniti sapiente cum repudiandae perspiciatis ratione eligendi similique!
        </p>
      </div>
      <div className="article_tags">
        <ArticleTag tag="Inspiracion" />
        <ArticleTag tag="Sociedad" />
        <ArticleTag tag="Web" />
      </div>
      <div className="shareSection">
        <h3>Compartir</h3>
        <div className="social_icons-share">
          <ShareLink name="twitter" />
          <ShareLink name="facebook" />
          <ShareLink name="linkedin" />
          <ShareLink name="email" />
        </div>
      </div>
      <h3 className="giveMeFeedback">
        Cuentame que te pareció este articulo{" "}
        <a target="blank" href="https://twitter.com/IsaiasFer4">
          Aquí
        </a>
      </h3>
    </section>
  );
}

export default ArticleContent;
