import React from "react";
import BlogContent from "../components/blogContent";
import BlogHero from "../components/blogHero";
import "../styles/scss/blogPage.scss"

class BlogHome extends React.Component {
  componentDidMount(){
    window.scroll(0, 0)
  }
  render() {
    return (
      <React.Fragment>
        {/* <NavBarContainer
          classContainer="navBar_container"
          class="barra_navegación"
        /> */}
        <BlogHero />
        <BlogContent/>
      </React.Fragment>
    );
  }
}

export default BlogHome;
