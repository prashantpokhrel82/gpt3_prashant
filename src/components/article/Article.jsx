import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, link }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href={link}>Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
