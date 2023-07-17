import React from 'react';
import { categoryNames } from '../../utils';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

interface IProps {
  category: string;
}

export const Header: React.FC<IProps> = ({ category }) => {
  return (
    <header className="header">
      <div className="container grid">
        <nav className="navigation">
          <Link to={'./'} className="navigation__logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="navigation__list">
            {['index', 'fashion', 'technologies', 'sport', 'other'].map((el) => {
              return (
                <li className="navigation__item" key={el}>
                  <Link to={`/${el}`} className={`navigation__link ${category === el ? 'navigation__link--active' : ''}`}>
                    {/*@ts-ignore*/}
                    {categoryNames[el]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
