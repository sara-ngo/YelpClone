import React from "react";

const Footer = () => {
  return (
    <div className="bg-warning text-end mt-5 py-2">
      <div className="page_container">
        <div className="container-fluid">
          Copyright &copy; {new Date().getFullYear()}
          </div>
      </div>
    </div>
  );
};

export default Footer;
