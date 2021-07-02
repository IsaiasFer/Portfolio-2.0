import React from "react";

function BlogHero() {
  return (
    <section className="blog_hero">
      <img className="picBook" src="https://i.imgur.com/74ucB7b.png" alt="" />
      <div className="blog_presentation">
        <div className="blog_title">
          <h1>BlogSpace</h1>
          <h3> by Isaias Fernandez</h3>
        </div>
        <div className="blog_description">
          <p>
            Este es un espacio que creé para expresarme, emitir opiniones acerca
            de temas que me interesan, o tan solo reflexiones que se me vienen a
            la cabeza y quiero compartir.
          </p>
        </div>
      </div>
      <div className="blog_hero-image">
          <img className="picFont" src='https://i.imgur.com/m8ChFM8.png' alt="" />
          
      </div>
    </section>
  );
}

export default BlogHero;
