import React from "react";

///the footer will showcase
///URL of instagram will be linked
/// at the bottom of the webpage, to provide a reference to the
//original source for comparison
const Footer = () => {
  return (
    <footer>

      <p>
        Instavanessa BY Vane{" "}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
