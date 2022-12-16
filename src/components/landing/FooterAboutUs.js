import { NavLink } from 'react-router-dom';

function FooterAboutUs() {
  return (
    <section className='footer__about_us'>
      <h2 className='footer__about_us__title'>Sobre nosotros</h2>
      <div className='footer__about_us__box'></div>
      <nav>
        <ul className='footer__about_us__list'>
          <li className='footer__about_us__list--item'>
            <NavLink className='footer__about_us__link link-light'>
              Contáctanos
            </NavLink>
          </li>
          <li className='footer__about_us__list--item'>
            <NavLink className='footer__about_us__link link-light'>
              Preguntas frecuentes-FAQs
            </NavLink>
          </li>
          <li className='footer__about_us__list--item'>
            <NavLink className='footer__about_us__link link-light'>
              Modelo de calidad
            </NavLink>
          </li>
          <li className='footer__about_us__list--item'>
            <NavLink className='footer__about_us__link link-light'>
              Modelo sostenible
            </NavLink>
          </li>
          <li className='footer__about_us__list--item'>
            <NavLink className='footer__about_us__link link-light'>
              Formas de pago
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default FooterAboutUs;
