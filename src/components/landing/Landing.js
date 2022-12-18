import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Landing(props) {
  return (
    <>
      <Header />
      <Main
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
      <Footer />
    </>
  );
}
export default Landing;
