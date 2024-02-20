import React from 'react';
import CustomTitleBar from '../shared/CustomTitleBar';

const ContactUs = () => {
  return (
   <div className='mt-20'>
    <CustomTitleBar title="Contact Us" />
     <div style={styles.container} className='grid lg:grid-cols-2 '>
        
      <div style={styles.contactForm}>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input type="text" id="name" name="name" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea id="message" name="message" style={styles.input} rows="4" required></textarea>
          </div>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </div>
      <div style={styles.contactInfo}>
        <h2 style={styles.sectionTitle}>Contact Information</h2>
        <p>Email: foxit.center@gmail.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: Nandipara, Khilgaon,Dhaka</p>
      </div>
    </div>
   </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px',
  },
  contactForm: {
    flexBasis: '50%',
    marginRight: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
    padding: '30px',
    borderRadius: '10px',
  },
  form: {
    
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
  
    marginBottom: '20px',
  },
  label: {
    margin: '5px',
    color: '#F0EDCC',
  },
  input: {
    backgroundColor:'#F0EDCC',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#009790',
    color: 'black',
    fontWeight:'bold',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  contactInfo: {
    flexBasis: '40%',
    color:'#009790'
  },
  sectionTitle: {
    marginTop: '20px',
    marginBottom: '20px',
    color: '#F0EDCC',
  },
};

export default ContactUs;
