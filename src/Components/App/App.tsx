import { Articles } from '../Articles/Articles';
import React, { useEffect } from 'react';
import { categoryIds } from '../../utils';
import '../../style.css';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { INewsAPI } from '../../types';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { PageLayout } from '../PageLayout/PageLayout';
import { AdminPage } from '../AdminPage/AdminPage';
import { AdminArticles } from '../AdminArticles/AdminArticles';
import { AdminArticleItem } from '../AdminArticleItem/AdminArticleItem';

export const App = () => {
  const [category, setCategory] = React.useState<string>('index');
  const [articles, setArticles] = React.useState<INewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });
  const location = useLocation();
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
    window.scrollTo(0, 0);
  }, [category, location]);

  useEffect(() => {
    setCategory(location.pathname.slice(1));
  }, [location]);
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Navigate to="index" />} />
        <Route
          path={'/index'}
          element={
            <PageLayout category={category}>
              <Articles articles={articles} />
            </PageLayout>
          }
        />
        <Route
          path={'/article/:id'}
          element={
            <PageLayout category={category}>
              <ArticleItem categories={articles.categories} sources={articles.sources} />
            </PageLayout>
          }
        />
        <Route
          path={'fashion'}
          element={
            <PageLayout category={category}>
              <Articles articles={articles} />{' '}
            </PageLayout>
          }
        />
        <Route
          path={'technologies'}
          element={
            <PageLayout category={category}>
              <Articles articles={articles} />
            </PageLayout>
          }
        />
        <Route
          path={'sport'}
          element={
            <PageLayout category={category}>
              <Articles articles={articles} />
            </PageLayout>
          }
        />
        <Route
          path={'other'}
          element={
            <PageLayout category={category}>
              <Articles articles={articles} />
            </PageLayout>
          }
        />
        <Route
          path={'admin'}
          element={
            <AdminPage>
              <AdminArticles />
            </AdminPage>
          }
        />
        <Route
          path={'admin/create'}
          element={
            <AdminPage>
              <AdminArticleItem />
            </AdminPage>
          }
        />
        <Route
          path={'admin/edit/:id'}
          element={
            <AdminPage>
              <AdminArticleItem />
            </AdminPage>
          }
        />
      </Routes>
    </>
  );
};
