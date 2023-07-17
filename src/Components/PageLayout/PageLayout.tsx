import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface iProps {
  category: string;
  children: any;
}

export const PageLayout: FC<iProps> = ({ children, category }) => {
  return (
    <>
      <Header category={category} />
      {children}
      <Footer category={category} />
    </>
  );
};
