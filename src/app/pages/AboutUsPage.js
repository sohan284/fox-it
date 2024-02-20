import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const AboutUsPage = () => {
  return (
   <div>
    <Navbar/>
     <div style={styles.container}>
      <div style={styles.companyInfo}>
        <h1 style={styles.heading}>About Our Company</h1>
        <p style={styles.paragraph}>
          Welcome to Fox IT, a leading provider of innovative IT solutions for businesses and individuals. 
          Our mission is to empower our clients with cutting-edge technology, expert guidance, and exceptional support. 
          With a dedicated team of professionals and a commitment to excellence, we strive to exceed expectations and drive success.
        </p>
        <p style={styles.paragraph}>
          At Fox IT, we offer a comprehensive range of services including software development, web design, 
          cybersecurity, cloud computing, and more. Whatever your technology needs may be, 
          we're here to help you navigate the digital landscape and achieve your goals.
        </p>
      </div>
      <div style={styles.team}>
        <h2 style={styles.heading}>Meet Our Team</h2>
        <div style={styles.member}>
          <img src="https://i.ibb.co/w6D38ZC/rijvee.jpg" alt="Team Member 1" style={styles.memberImage} />
          <h3 style={styles.memberName}>Rijvee Rahman</h3>
          <p style={styles.memberRole}>CEO & Founder</p>
          <p style={styles.memberBio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna quis ex pharetra eleifend.</p>
        </div>
        <div style={styles.member}>
          <img src="https://i.ibb.co/Mkypmw9/yousuf.jpg" alt="Team Member 2" style={styles.memberImage} />
          <h3 style={styles.memberName}>Jane Smith</h3>
          <p style={styles.memberRole}>CTO</p>
          <p style={styles.memberBio}>Sed euismod, libero sed consectetur dapibus, nunc lectus viverra erat, vel lobortis libero magna et lacus.</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
    <Footer/>
   </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '40px',
    color: '#F0EDCC',
  },
  companyInfo: {
    marginBottom: '40px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#F0EDCC',
  },
  team: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  member: {
    flexBasis: '300px',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#F0EDCC',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  memberImage: {
    width: '120px',
    height:'120px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  memberName: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  memberRole: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
  },
  memberBio: {
    fontSize: '16px',
    color: '#777',
  },
};

export default AboutUsPage;
