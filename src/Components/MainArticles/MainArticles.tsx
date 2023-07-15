import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  image: string;
  category: string;
  description: string;
  source: string;
  id: number;
}

export const MainArticle: React.FC<IProps> = ({ title, image, category, description, source, id }) => {
  return (
    <Link to={`../article/${id}`} className="article_big_link">
      <article className="article__big-main">
        <div className="article__big_image-container">
          <img className="article__big_image" src={image} alt="Фото статьи" />
        </div>
        <div className="article__big_content">
          <span className="article__big_category article-category">{category}</span>
          <h2 className="article__big_title">{title}</h2>
          <p className="article__big_text">{description}</p>
          <span className="article__big_source article-source">{source}</span>
        </div>
      </article>
    </Link>
  );
};
