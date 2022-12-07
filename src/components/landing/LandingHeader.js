import { NavLink } from 'react-router-dom';
import '../../styles/components/landing/LandingHeader.scss';
import ulverflokkLogo from '../../images/ulverflokk_logo.png';

function LandingHeader() {
  return (
    <header className='landing__header'>
      <div className='landing__header__logo'>
        {/* <img
          src={ulverflokkLogo}
          alt='Ulverflokk logo'
          className='landing__header__logo--image'
        /> */}
      </div>
      <nav className='landing__header__menu'>
        <ul className='landing__header__list'>
          <li className='landing__header__list--item'>
            <NavLink to='/' className='landing__header__list--link'>
              Home
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink to='/hombre' className='landing__header__list--link'>
              Hombre
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink to='/mujer' className='landing__header__list--link'>
              Mujer
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink
              to='/nuestro compromiso'
              className='landing__header__list--link'
            >
              Nuestro compromiso
            </NavLink>
          </li>
          <li className='landing__header__list--item'>
            <NavLink to='/contactanos' className='landing__header__list--link'>
              Contáctanos
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className='landing__header__shopping--cart'>
        <NavLink to='/favoritos'>
          <i class='fa-regular fa-heart'></i>
        </NavLink>
        <NavLink to='/cesta de la compra'>
          <i class='fa-solid fa-bag-shopping'></i>
        </NavLink>
      </section>
    </header>
  );
}

export default LandingHeader;
