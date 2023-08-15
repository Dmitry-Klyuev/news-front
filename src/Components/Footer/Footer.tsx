import React from 'react';
import { categoryNames } from '../../utils';
import logo_footer from '../../images/logo_footer.svg';
import { Link } from 'react-router-dom';

interface iProps {
  category: string;
}

export const Footer: React.FC<iProps> = ({ category }) => {
  return (
    <footer className="footer">
      <div className="container grid">
        <nav className="navigation">
          <Link to={'/index'} className="navigation__logo">
            <img src={logo_footer} alt="logo" />
          </Link>
          <ul className="navigation__list">
            {['index', 'fashion', 'technologies', 'sport', 'other'].map((el) => {
              return (
                <li className="navigation__item" key={el}>
                  <Link to={el} data-href={el} className={`navigation__link footer_link ${category === el ? 'navigation__link--active' : ''}`}>
                    {/*@ts-ignore*/}
                    {categoryNames[el]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
