import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <a href="#" style={styles.footerLink}>Privacy Policy</a> | 
        <a href="#" style={styles.footerLink}> Terms of Service</a>
      </div>
      <div>
        <p>© 2024 Poetry Haven, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px 50px',
    textAlign: 'center',
  },
  footerLink: {
    margin: '0 10px',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Footer;
