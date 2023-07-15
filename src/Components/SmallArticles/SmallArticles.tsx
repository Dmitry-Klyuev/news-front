import React from 'react';
import { beautifyDate } from '../../utils';
import { Link } from 'react-router-dom';

interface IProps {
  title: string;
  source: string;
  date: string;
  id: number;
}

export const SmallArticle: React.FC<IProps> = ({ title, source, date, id }) => {
  return (
    <Link to={`../article/${id}`} className="article__small-main-link">
      <article className="article__small-main">
        <h2 className="article__small_title">{title}</h2>
        <span className="article__small_date article-date">{beautifyDate(date)}</span>
        <span className="article__small_source article-source">{source}</span>
      </article>
    </Link>
  );
};
