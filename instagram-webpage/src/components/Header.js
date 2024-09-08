import React from "react";


///the Header will showcase
///name of webpage, homepage icons with search 


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Instagram</div>
      <input type="text" placeholder="Search" />
      <nav>
        <i className="fas fa-home"></i>
        <i className="fas fa-paper-plane"></i>
        <i className="fas fa-heart"></i>
      </nav>
    </header>
  );
};

export default Header;
