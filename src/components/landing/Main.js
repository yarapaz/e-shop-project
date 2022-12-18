import Hero from './Hero';
import Products1 from './Products1';
import Products2 from './Products2';

function Main(props) {
  return (
    <main className='main'>
      <Hero />
      <Products1 />
      <Products2
        isHovered={props.isHovered}
        setIsHovered={props.setIsHovered}
        isSClicked={props.isSClicked}
        setSIsClicked={props.setSIsClicked}
        isMClicked={props.isMClicked}
        setMIsClicked={props.setMIsClicked}
        isLClicked={props.isLClicked}
        setLIsClicked={props.setLIsClicked}
        isXLClicked={props.isXLClicked}
        setXLIsClicked={props.setXLIsClicked}
      />
      <section className='info2'>
        <article>
          <h2></h2>
          <a href=''></a>
        </article>
        <article></article>
      </section>
      <section className='info3'>
        <article>
          <h2></h2>
          <p></p>
          <a href=''></a>
        </article>
      </section>
    </main>
  );
}

export default Main;
