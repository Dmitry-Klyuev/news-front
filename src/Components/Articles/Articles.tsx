import { SmallArticle } from '../SmallArticles/SmallArticles';
import { MainArticle } from '../MainArticles/MainArticles';
import React from 'react';
import { INewsAPI } from '../../types';

interface IProps {
  articles: INewsAPI;
}

export const Articles: React.FC<IProps> = ({ articles }) => {
  return (
    <>
      <main className="main">
        <section className="articles">
          <div className="container grid">
            <section className="articles__big-column">
              {articles.items.splice(0, 4).map((el) => {
                const sources = articles.sources.find(({ id }) => el.source_id === id);
                const categories = articles.categories.find(({ id }) => el.category_id === id);
                return <MainArticle key={el.title} title={el.title} description={el.description} image={el.image} source={sources?.name || ''} category={categories?.name || ''} id={el.id} />;
              })}
            </section>
            <section className="articles__small-column">
              {articles.items.slice(3, 12).map((el) => {
                const sources = articles.sources.find(({ id }) => el.source_id === id);
                return <SmallArticle key={el.title} source={sources?.name || ''} title={el.title} date={el.date} id={el.id} />;
              })}
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
