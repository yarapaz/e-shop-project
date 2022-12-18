import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image1 from '../../images/carousel1.png';
import image2 from '../../images/carousel2.png';
import image3 from '../../images/carousel3.png';
import image4 from '../../images/carousel4.png';
import '../../styles/components/LandingProducts2.scss';

function Products2(props) {
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseOver = (ev) => {
    if (ev.target.id === '1') {
      props.setIsHovered(true);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered4(false);
    } else if (ev.target.id === '2') {
      props.setIsHovered(false);
      setIsHovered2(true);
      setIsHovered3(false);
      setIsHovered4(false);
    } else if (ev.target.id === '3') {
      props.setIsHovered(false);
      setIsHovered2(false);
      setIsHovered3(true);
      setIsHovered4(false);
    } else if (ev.target.id === '4') {
      props.setIsHovered(false);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered4(true);
    }
  };
  const handleMouseOut = (ev) => {
    if (ev.target.id === '1') {
      props.setIsHovered(true);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered4(false);
    } else if (ev.target.id === '2') {
      props.setIsHovered(false);
      setIsHovered2(true);
      setIsHovered3(false);
      setIsHovered4(false);
    } else if (ev.target.id === '3') {
      props.setIsHovered(false);
      setIsHovered2(false);
      setIsHovered3(true);
      setIsHovered4(false);
    } else if (ev.target.id === '4') {
      props.setIsHovered(false);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered4(true);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleClick = (ev) => {
    if (ev.target.id === 'S') {
      props.setSIsClicked(true);
      props.setMIsClicked(false);
      props.setLIsClicked(false);
      props.setXLIsClicked(false);
    } else if (ev.target.id === 'M') {
      props.setSIsClicked(false);
      props.setMIsClicked(true);
      props.setLIsClicked(false);
      props.setXLIsClicked(false);
    }
    if (ev.target.id === 'L') {
      props.setSIsClicked(false);
      props.setMIsClicked(false);
      props.setLIsClicked(true);
      props.setXLIsClicked(false);
    }
    if (ev.target.id === 'XL') {
      props.setSIsClicked(false);
      props.setMIsClicked(false);
      props.setLIsClicked(false);
      props.setXLIsClicked(true);
    }
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
              id='1'
            >
              <img
                className='carousel__images__image'
                src={image3}
                alt='First slide'
              />
              <article
                className={
                  props.isHovered ? 'carousel__images__info ' : 'collapsed'
                }
              >
                <ul className='carousel__images__info--list'>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isSClicked ? 'clicked' : ''
                    }`}
                    id='S'
                    onClick={handleClick}
                  >
                    S
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isMClicked ? 'clicked' : ''
                    }`}
                    id='M'
                    onClick={handleClick}
                  >
                    M
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isLClicked ? 'clicked' : ''
                    }`}
                    id='L'
                    onClick={handleClick}
                  >
                    L
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isXLClicked ? 'clicked' : ''
                    }`}
                    id='XL'
                    onClick={handleClick}
                  >
                    XL
                  </li>
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
            <article
              className='carousel__images__card'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id='2'
            >
              <img
                className='carousel__images__image'
                src={image1}
                alt='First slide'
              />
              <article
                className={isHovered2 ? 'carousel__images__info ' : 'collapsed'}
              >
                <ul className='carousel__images__info--list'>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isSClicked ? 'clicked' : ''
                    }`}
                    id='S'
                    onClick={handleClick}
                  >
                    S
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isMClicked ? 'clicked' : ''
                    }`}
                    id='M'
                    onClick={handleClick}
                  >
                    M
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isLClicked ? 'clicked' : ''
                    }`}
                    id='L'
                    onClick={handleClick}
                  >
                    L
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isXLClicked ? 'clicked' : ''
                    }`}
                    id='XL'
                    onClick={handleClick}
                  >
                    XL
                  </li>
                </ul>
                <form action='' onSubmit={handleSubmit}>
                  <button className='carousel__images__btn' type='button'>
                    Añadir al carrito
                  </button>
                </form>
              </article>
              <p
                className='carousel__images__image--name'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Sudadera Lobo Strength
              </p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article
              className='carousel__images__card'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id='3'
            >
              <img
                className='carousel__images__image'
                src={image2}
                alt='First slide'
              />
              <article
                className={isHovered3 ? 'carousel__images__info ' : 'collapsed'}
              >
                <ul className='carousel__images__info--list'>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isSClicked ? 'clicked' : ''
                    }`}
                    id='S'
                    onClick={handleClick}
                  >
                    S
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isMClicked ? 'clicked' : ''
                    }`}
                    id='M'
                    onClick={handleClick}
                  >
                    M
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isLClicked ? 'clicked' : ''
                    }`}
                    id='L'
                    onClick={handleClick}
                  >
                    L
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isXLClicked ? 'clicked' : ''
                    }`}
                    id='XL'
                    onClick={handleClick}
                  >
                    XL
                  </li>
                </ul>
                <form action='' onSubmit={handleSubmit}>
                  <button className='carousel__images__btn' type='button'>
                    Añadir al carrito
                  </button>
                </form>
              </article>
              <p className='carousel__images__image--name'>Sudadera Lobo</p>
              <p className='carousel__images__image--price'>
                32,90€ IVA incluído
              </p>
            </article>
            <article
              className='carousel__images__card'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id='4'
            >
              <img
                className='carousel__images__image'
                src={image4}
                alt='First slide'
              />
              <article
                className={isHovered4 ? 'carousel__images__info ' : 'collapsed'}
              >
                <ul className='carousel__images__info--list'>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isSClicked ? 'clicked' : ''
                    }`}
                    id='S'
                    onClick={handleClick}
                  >
                    S
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isMClicked ? 'clicked' : ''
                    }`}
                    id='M'
                    onClick={handleClick}
                  >
                    M
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isLClicked ? 'clicked' : ''
                    }`}
                    id='L'
                    onClick={handleClick}
                  >
                    L
                  </li>
                  <li
                    className={`carousel__images__info--list--item ${
                      props.isXLClicked ? 'clicked' : ''
                    }`}
                    id='XL'
                    onClick={handleClick}
                  >
                    XL
                  </li>
                </ul>
                <form action='' onSubmit={handleSubmit}>
                  <button className='carousel__images__btn' type='button'>
                    Añadir al carrito
                  </button>
                </form>
              </article>
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
