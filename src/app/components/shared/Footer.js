import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3 className='text-[#009790]'>About Us</h3>
          <p className='text-[#F0EDCC]'>Elevate your digital journey with us today!</p>
        </div>
        <div style={styles.footerSection}>
          <h3 className='text-[#009790]'>Quick Links</h3>
          <ul style={styles.footerLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 className='text-[#009790]'>Connect With Us</h3>
          <div style={styles.socialIcons}>
            <a className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faFacebook} /></a>
            <a className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className='m-1' href="https://www.facebook.com/foxitcentre"><FontAwesomeIcon icon={faInstagram} /></a>
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
