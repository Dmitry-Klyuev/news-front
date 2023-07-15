import { Articles } from '../Articles/Articles';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import React, { useEffect } from 'react';
import { categoryIds } from '../../utils';
import '../../style.css';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { INewsAPI } from '../../types';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

export const App = () => {
  const [category, setCategory] = React.useState<string>('index');
  const [articles, setArticles] = React.useState<INewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });
  console.log(articles);
  const lacation = useLocation();
  React.useEffect(() => {
    //@ts-ignore
    const categoryId: string = categoryIds[category];
    if (categoryId || categoryId == '0') {
      fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryId || '')
        .then((response) => response.json())
        .then((response: INewsAPI) => {
          console.log(response);
          const filteredItems = {
            categories: [...response.categories],
            sources: [...response.sources],
            items: [...response.items.filter((el) => el.category_id !== 6)],
          };
          setArticles(filteredItems);
        });
    }
  }, [category, lacation]);

  useEffect(() => {
    setCategory(location.pathname.slice(1));
  }, [lacation]);
  return (
    <>
      <Header category={category} />
      <Routes>
        <Route path={'/'} element={<Navigate to="index" />} />
        <Route path={'/index'} element={<Articles articles={articles} />} />
        <Route path={'/article/:id'} element={<ArticleItem categories={articles.categories} sources={articles.sources} />} />
        <Route path={'fashion'} element={<Articles articles={articles} />} />
        <Route path={'technologies'} element={<Articles articles={articles} />} />
        <Route path={'sport'} element={<Articles articles={articles} />} />
        <Route path={'other'} element={<Articles articles={articles} />} />
      </Routes>
      <Footer category={category} />
    </>
  );
};
