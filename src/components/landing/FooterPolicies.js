import { NavLink } from 'react-router-dom';

function FooterPolicies() {
  return (
    <section className='footer__policies'>
      <h2 className='footer__policies__title'>Políticas</h2>
      <div className='footer__policies__box'></div>
      <nav>
        <ul className='footer__policies__list'>
          <li className='footer__policies__list--item'>
            <NavLink className='footer__policies__link'>
              Política de envíos
            </NavLink>
          </li>
          <li className='footer__policies__list--item'>
            <NavLink className='footer__policies__link'>
              Política de devoluciones
            </NavLink>
          </li>
          <li className='footer__policies__list--item'>
            <NavLink className='footer__policies__link'>
              Política de cookies
            </NavLink>
          </li>
          <li className='footer__policies__list--item'>
            <NavLink className='footer__policies__link'>Aviso legal</NavLink>
          </li>
          <li className='footer__policies__list--item'>
            <NavLink className='footer__policies__link'>
              Política de privacidad
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default FooterPolicies;
