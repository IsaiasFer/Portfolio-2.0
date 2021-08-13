import React from "react";
import ArticleContent from "../components/articleContent";
import "../styles/scss/articlePage.scss";
import { desvanecimiento } from "../scripts/functions";

class ArticlePage extends React.Component {
  componentDidMount() {
    var menu = document.querySelector(".menu");
    window.scroll(0, 0);
    menu.classList.add("menuReverse");
    desvanecimiento();
  }
  componentWillUnmount() {
    var menu = document.querySelector(".menu");
    menu.classList.remove("menuReverse");
    desvanecimiento();
  }
  render() {
    return (
      <React.Fragment>
        <ArticleContent />
      </React.Fragment>
    );
  }
}

export default ArticlePage;
