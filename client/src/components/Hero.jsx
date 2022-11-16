import React from "react";

const Hero = ({ children, notHome }) => {
  return (
    <>
      {/* <!-- HERO START --> */}
      <div className={`hero_container ${notHome}`}>
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-12 mx-auto">
                <div className="hero_content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-md-8 mx-auto">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- HERO END --> */}
    </>
  );
};

export default Hero;
