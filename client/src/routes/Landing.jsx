import React from "react";
import cook from "../assets/images/cook.jpg";
import px1 from "../assets/images/px1.jpg";
import px2 from "../assets/images/px2.jpg";
import px3 from "../assets/images/px3.jpg";
import LandingHero from "../components/LandingHero";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <LandingHero />
      <div className="page_container mt-5">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-12 col-sm-6 col-md-7">
              <h1 className="display-4">About us</h1>
              <p>
                Website is built for class project (CS 157A)
                The purpose of this website is to let users can find and review restaurants easily in our database.  
              </p>
              <p>
                We develop Database manage system based on PostgreSQL.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-5">
              <img className="w-100 rounded-3" src={cook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="page_container mt-5 d-none d-md-block">
        <div className="container-fluid">
          <div className="row gy-4">
            <div className="col-4">
              <img className="w-100 rounded-3" src={px1} alt="" />
            </div>
            <div className="col-4">
              <img className="w-100 rounded-3" src={px2} alt="" />
            </div>
            <div className="col-4">
              <img className="w-100 rounded-3" src={px3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
