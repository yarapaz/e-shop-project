import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/carousel1.png';
import '../../styles/components/CarouselDemo.scss';

function UncontrolledExample() {
  return (
    <div className='carousel'>
      <Carousel interval={null}>
        <Carousel.Item>
          <div className='carousel__images'>
            <img className='img' src={image1} alt='First slide' />
            <img className='img' src={image1} alt='First slide' />
            <img className='img' src={image1} alt='First slide' />
            <img className='img' src={image1} alt='First slide' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=Second slide&bg=282c34'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=Third slide&bg=20232a'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
