import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/Logo.svg';

function Header({isLoggedIn}) {
  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип названия сайта Место" />
        { isLoggedIn ? <p><Link to={"/signin"}>Выйти</Link></p> :  (<p><Link to={"/signup"}>Регистрация</Link></p> || <p><Link to={"/signup"}>Вход</Link></p>) }
      </header>
  );
  }

export default Header;
