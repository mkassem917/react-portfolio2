import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        © Mohammad Kassem &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;