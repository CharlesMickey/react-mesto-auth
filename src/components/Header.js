import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/Logo.svg';

function Header({isLoggedIn, onLogOut, email}) {
  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип названия сайта Место" />
        { isLoggedIn ? <p className={`header__text` }>{email}<Link className={`header__text header__text_color` } to={"/signin"} onClick={onLogOut}>Выйти </Link></p> :  (<p><Link to={"/signup"}>Регистрация</Link></p> || <p><Link to={"/signin"}>Вход</Link></p>) }
      </header>
  );
  }

export default Header;
