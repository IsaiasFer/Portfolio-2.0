import React from "react";
import { Link } from "react-router-dom";

function Article(props) {
  return (
    <div className="blog_article">
      <figure className="blog_article_image-container">
        <img src={props.image} alt="" className="blog_article_image" />
      </figure>
      <div className="blog_article_info">
        <h2 className="blog_article_title">
          <Link to="/blog/article">{props.title}</Link>
        </h2>
        <h3 className="blog_article_description">{props.description}</h3>
      </div>
    </div>
  );
}

export default Article;
