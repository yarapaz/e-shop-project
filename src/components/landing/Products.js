import '../../styles/components/LandingProducts.scss';
import { NavLink } from 'react-router-dom';

function Products() {
  return (
    <section className='products'>
      <nav className='products__menu'>
        <ul className='products__list'>
          <li className='products__list--item'>
            <div className='products__list__image--sweatshirts'></div>
            <h2 className='products__list__title'>Sudaderas</h2>
            <NavLink className='products__list__link'>Ver más</NavLink>
          </li>
          <div className='products__box'>
            <li className='products__box__list--item--croptops'>
              <div className='products__box__image--croptops'></div>
              <h2 className='products__box__title--croptops'>Crop Tops</h2>
              <NavLink className='products__box__link--croptops'>
                Ver más
              </NavLink>
            </li>
            <li className='products__box__list--item--hoodies'>
              <div className='products__box__image--hoodies'></div>
              <h2 className='products__box__title--hoodies'>Hoodies</h2>
              <NavLink className='products__box__link--hoodies'>
                Ver más
              </NavLink>
            </li>
          </div>
          <li className='products__list--item'>
            <div className='products__list__image--tshirts'></div>
            <h2 className='products__list__title'>Camisetas</h2>
            <NavLink className='products__list__link'>Ver más</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Products;
