import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(e);
  };
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <div className='flex justify-center'>
          <img data-aos="zoom-in"
                  className="lg:h-12 h-12 w-auto"
                  src="https://i.ibb.co/X3RtxjP/logo.png"
                  alt="FoxIt"
                  border="0"
                />
          </div>
          <p data-aos="zoom-in" className='text-[#F0EDCC]'>Elevate your digital journey with us today!</p>
        </div>
        <div data-aos="zoom-in" style={styles.footerSection}>
          <h3 className='text-[#009790]'>Quick Links</h3>
          <ul  style={styles.footerLinks}>
            <li> <Link to="/about" onClick={() => handleNavigate('/about')}>About</Link></li>
            <li> <Link to="/" onClick={() => handleNavigate('/')}>Services</Link></li>
            <li> <Link to="/" onClick={() => handleNavigate('/')}>Home</Link></li>
            <li> <Link to="/" onClick={() => handleNavigate('/')}>Contact</Link></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 className='text-[#009790]'>Connect With Us</h3>
          <div style={styles.socialIcons}>
            <a data-aos="zoom-in" className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faFacebook} /></a>
            <a data-aos="zoom-in" className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a data-aos="zoom-in" className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p className='text-[#F0EDCC]'>&copy; 2024 Fox-IT. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#002F31',
    color: '#fff',
    padding: '50px 20px',
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerSection: {
    flexBasis: '300px',
    marginBottom: '20px',
  },
  footerLinks: {
    listStyleType: 'none',
    padding: 0,
    color:'#F0EDCC',
  },
  socialIcons: {
    color: '#F0EDCC',
    fontSize: '24px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  footerBottom: {
    borderTop: '1px solid #555',
    paddingTop: '20px',
    textAlign: 'center',
  },
};

export default Footer;