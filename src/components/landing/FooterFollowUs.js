import { NavLink } from 'react-router-dom';

function FooterFollowUs() {
  return (
    <section className='footer__follow_us'>
      <h2 className='footer__follow_us__title'>Síguenos en</h2>
      <div className='footer__follow_us__box'></div>
      <nav>
        <ul className='footer__follow_us__list'>
          <li className='footer__follow_us__list--item'>
            <NavLink className='footer__follow_us__link'>
              <i class='fa-brands fa-facebook-f'></i>
            </NavLink>
          </li>
          <li className='footer__follow_us__link'>
            <NavLink className='footer__follow_us__link'>
              <i class='fa-brands fa-instagram'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default FooterFollowUs;
