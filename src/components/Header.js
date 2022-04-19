import { useState } from 'react';
import logo from '../images/logo.svg';
import basket from '../images/basket.svg';

import '../blocks/header/header.css'

export default function Header() {
  const [basketValue, setBasketValue] = useState(0);

  return (
    <div className='header'>
      <img className='header__logo' alt='Логотип' src={logo} />
      <nav className='header__menu'>
        <a className='header__link' href='#'>Легенда</a>
        <a className='header__link' href='#'>Каталог</a>
        <a className='header__link' href='#'>О нас</a>
      </nav>
      <div className='header__basket basket'>
        <img className='basket__image' alt='Корзина' src={basket} />
        <p className='basket__count'>{basketValue}</p>
      </div>
    </div>
  );
}