import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src="../../image/logo.png"
          alt="Poetry Haven Logo"
          style={styles.logo}
        />
        <h1 style={styles.companyName}>Poetry Haven</h1>
      </div>
      <input
        type="text"
        placeholder="Search Poet"
        style={styles.searchBar}
      />
      <div style={styles.nav}>
        <button style={styles.button}>Log In</button>
        <button style={{ ...styles.button, ...styles.createAccountButton }}>
          Create Account
        </button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    height:'10vh',
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 50px",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "7px",
  },
  companyName: {
    fontSize: "24px",
    fontFamily: "serif",
    color: "#ff3d00",
  },
  nav: {
    display: "flex",
  },
  searchBar: {
    width: "30%",
    padding: "7px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    marginRight: "15px",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
    border:'none'
  },
  createAccountButton: {
    backgroundColor: "#ff3d00",
    color: "white",
  },
};

export default Header;
