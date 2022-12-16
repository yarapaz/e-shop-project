import { NavLink } from 'react-router-dom';
import '../../styles/components/LandingHeader.scss';

function Header() {
  return (
    <header className='landing__header'>
      <div className='landing__header__logo'></div>
      <nav className='landing__header__menu'>
        <ul className='landing__header__list'>
          <li className='landing__header__list--item'>
            <NavLink to='/' className='landing__header__list--link link-dark'>
              Home
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink
              to='/hombre'
              className='landing__header__list--link link-dark'
            >
              Hombre
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink
              to='/mujer'
              className='landing__header__list--link link-dark'
            >
              Mujer
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink
              to='/nuestro compromiso'
              className='landing__header__list--link link-dark'
            >
              Nuestro compromiso
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink
              to='/contactanos'
              className='landing__header__list--link link-dark'
            >
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className='landing__header__shopping--cart'>
        <NavLink to='/favoritos'>
          <i className='fa-regular fa-heart'></i>
        </NavLink>
        <NavLink to='/cesta de la compra'>
          <i className='fa-solid fa-bag-shopping'></i>
        </NavLink>
      </section>
    </header>
  );
}

export default Header;
