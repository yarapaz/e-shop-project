import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import image1 from '../../images/carousel1.png';
import image2 from '../../images/carousel2.png';
import image3 from '../../images/carousel3.png';
import image4 from '../../images/carousel4.png';
import '../../styles/components/LandingProducts2.scss';

function Products2(props) {
  const handleMouseOver = () => {
    props.setIsClicked(true);
  };
  const handleMouseOut = () => {
    props.setIsClicked(false);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className='carousel'>
      <article className='carousel__title'>
        <h2 className='carousel__title--dark'>
          Los impresc
          <span className='carousel__title--light'>indibles del invierno</span>
        </h2>
        <div className='carousel__title__box'></div>
      </article>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className='carousel__images__box'>
            <article
              className='carousel__images__card'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                className='carousel__images__image'
                src={image3}
                alt='First slide'
              />
              <article
                className={
                  props.isClicked ? 'carousel__images__info ' : 'collapsed'
                }
              >
                <ul className='carousel__images__info--list'>
                  <li className='carousel__images__info--list--item'>S</li>
                  <li className='carousel__images__info--list--item'>M</li>
                  <li className='carousel__images__info--list--item'>L</li>
                  <li className='carousel__images__info--list--item'>XL</li>
                </ul>
                <form action='' onSubmit={handleSubmit}>
                  <button className='carousel__images__btn' type='button'>
                    Añadir al carrito
                  </button>
                </form>
              </article>
              <p className='carousel__images__image--name'>
                Sudadera Tigre Sakura
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image1}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Lobo Strength
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image2}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>Sudadera Lobo</p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image4}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Mandala y Flor
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel__images__box'>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image3}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Tigre Sakura
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image1}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Lobo Strength
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image2}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>Sudadera Lobo</p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image4}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Mandala y Flor
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
          </div>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel__images__box'>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image3}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Tigre Sakura
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image1}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Lobo Strength
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image2}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>Sudadera Lobo</p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article className='carousel__images__card'>
              <img
                className='carousel__images__image'
                src={image4}
                alt='First slide'
              />
              <p className='carousel__images__image--name'>
                Sudadera Mandala y Flor
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
          </div>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <article>
        <NavLink className='more__link'>Ver más sudaderas</NavLink>
      </article>
    </section>
  );
}

export default Products2;
