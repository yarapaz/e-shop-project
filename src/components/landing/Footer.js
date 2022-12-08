import '../../styles/components/LandingFooter.scss';
import FooterAboutUs from './FooterAboutUs';
import FooterPolicies from './FooterPolicies';
import FooterFollowUs from './FooterFollowUs';
import FooterPaymentMethods from './FooterPaymentMethods';

function Footer() {
  return (
    <footer className='footer'>
      <FooterAboutUs />
      <FooterPolicies />
      <div className='footer__box'>
        <FooterFollowUs />
        <FooterPaymentMethods />
      </div>
    </footer>
  );
}

export default Footer;
