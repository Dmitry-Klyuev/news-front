import React, { FC } from 'react';
import './ArticleItem.css';
import { RelatedSmallArticle } from '../RelatedSmallArticle/RelatedSmallArticle';
import { SingleLineTitleArticle } from '../SingleLineTitleArticle/SingleLineTitleArticle';
import { IArticle, IArticleItemAPI, Source, Category } from '../../types';
import { beautifyDate } from '../../utils';
import { useParams } from 'react-router-dom';

interface IProps {
  categories: Category[];
  sources: Source[];
}

export const ArticleItem: FC<IProps> = ({ categories, sources }) => {
  const [articleItem, setArticleItem] = React.useState<IArticleItemAPI | null>(null);
  const [relatedArticles, setRelatedArticles] = React.useState<IArticle[] | null>(null);
  const { id } = useParams();
  React.useEffect(() => {
    fetch(`https://frontend.karpovcourses.net/api/v2/news/full/${id}`)
      .then((response) => response.json())
      .then(setArticleItem);

    fetch(`https://frontend.karpovcourses.net/api/v2/news/related/${id}?count=9`)
      .then((response) => response.json())
      .then((response) => {
        setRelatedArticles(response.items);
      });
  }, [id]);

  if (articleItem === null || relatedArticles === null) {
    return null;
  }

  return (
    <section className="article-page">
      <article className="article">
        {articleItem.image.length ? (
          <section className="article__hero" style={{ backgroundImage: `url(${articleItem.image})` }}>
            <div className="container article__hero-content">
              <div className="grid">
                <h1 className="article__hero-title">{articleItem.title}</h1>
              </div>

              <div className="grid">
                <span className="article-category article__category">{articleItem.category.name}</span>
                <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
              </div>
            </div>
          </section>
        ) : null}

        <div className="grid container article__main">
          <div className="article__content">
            {!articleItem.image.length && (
              <div className="article__title-container">
                <h1 className="article__title">{articleItem.title}</h1>

                <div className="grid">
                  <span className="article-category article__category">{articleItem.category.name}</span>
                  <span className="article-date article__date">{beautifyDate(articleItem.date)}</span>
                </div>
              </div>
            )}

            <p>{articleItem.text}</p>
          </div>

          <div className="article__small-column">
            {relatedArticles.slice(3, 9).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);

              return <RelatedSmallArticle key={item.id} title={item.title} category={category?.name || ''} source={source?.name || ''} image={item.image} id={item.id} />;
            })}
          </div>
        </div>
      </article>

      <section className="article-page__related-articles">
        <div className="container">
          <h2 className="article-page__related-articles-title">Читайте также:</h2>

          <div className="grid article-page__related-articles-list">
            {relatedArticles.slice(0, 3).map((item) => {
              const category = categories.find(({ id }) => item.category_id === id);
              const source = sources.find(({ id }) => item.source_id === id);

              return <SingleLineTitleArticle key={item.id} image={item.image} title={item.title} text={item.description} category={category?.name || ''} source={source?.name || ''} />;
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
