import Hero from './Hero';
import Products1 from './Products1';
import Products2 from './Products2';

function Main(props) {
  return (
    <main className='main'>
      <Hero />
      <Products1 />
      <Products2
        isClicked={props.isClicked}
        setIsClicked={props.setIsClicked}
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
