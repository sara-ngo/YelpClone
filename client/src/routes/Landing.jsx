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
                This website is built for educational purposes during Database Management System course at San Jose State University. 
              </p>
              <p>
                The purposes of this website are to display a list of restaurants and theirs reviews in our database.
                It also gives users opportunities to contribute information of restaurants and public their reviews. 
              </p>
              <p>
                The project is made by:
              </p>
              <p>Sara Ngo - Backend developer
                <a href="https://linkedin.com/in/sara-ngo" class="social-icon si-rounded si-small si-linkedin">
                  <i class="icon-linkedin"></i>
                </a>
                <a href="https://github.com/sara-ngo">
                  <i class="fab fa-github" style='font-size:30px'></i>
                </a>
              </p>
              <p>Mai Tran - Frontend developer
                <a href="https://linkedin.com/" class="social-icon si-rounded si-small si-linkedin">
                  <i class="icon-linkedin"></i>
                </a>
                <a href="https://github.com/ntran12">
                  <i class="fab fa-github" style='font-size:30px'></i>
                </a>
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
