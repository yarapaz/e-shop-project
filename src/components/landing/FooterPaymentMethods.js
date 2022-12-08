import { NavLink } from 'react-router-dom';

function FooterPaymentMethods() {
  return (
    <section className='footer__payment_methods'>
      <h2 className='footer__payment_methods__title'>Métodos de pago</h2>
      <div className='footer__payment_methods__box'></div>
      <nav>
        <ul className='footer__payment_methods__list'>
          <li className='footer__payment_methods__list--item'>
            <NavLink className='footer__payment_methods__link'>
              <i className='fa-brands fa-cc-visa'></i>
            </NavLink>
          </li>
          <li className='footer__payment_methods__list--item'>
            <NavLink className='footer__payment_methods__link'>
              <i className='fa-brands fa-cc-mastercard'></i>
            </NavLink>
          </li>
          <li className='footer__payment_methods__list--item'>
            <NavLink className='footer__payment_methods__link'>
              <i className='fa-brands fa-cc-paypal'></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default FooterPaymentMethods;
