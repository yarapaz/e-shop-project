import '../../styles/components/LandingProducts.scss';
import { NavLink } from 'react-router-dom';

function Products() {
  return (
    <section className='products'>
      <nav>
        <ul className='products__list'>
          <li className='products__list--item--sweatshirts'>
            <h2 className='products__list__title'>Sudaderas</h2>
            <NavLink className='products__list__link'>Ver más</NavLink>
          </li>
          <div className='products__box'>
            <li className='products__list--item--crop_tops'>
              <h2 className='products__list__title'>Crop Tops</h2>
              <NavLink className='products__list__link'>Ver más</NavLink>
            </li>
            <li className='products__list--item--hoodies'>
              <h2 className='products__list__title'>Hoodies</h2>
              <NavLink className='products__list__link'>Ver más</NavLink>
            </li>
          </div>
          <li className='products__list--item--tshirts'>
            <h2 className='products__list__title'>Camisetas</h2>
            <NavLink className='products__list__link'>Ver más</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Products;
