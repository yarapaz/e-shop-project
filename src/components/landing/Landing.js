import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Landing(props) {
  return (
    <>
      <Header />
      <Main isClicked={props.isClicked} setIsClicked={props.setIsClicked} />
      <Footer />
    </>
  );
}
export default Landing;
