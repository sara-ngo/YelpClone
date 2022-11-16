import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="
    				header_container
    				position-absolute
    				top-0
    				lef-0
    				py-2 py-md-3
    				w-100
    			"
      >
        <div className="page_container">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-11 col-md-12 mx-auto">
                <div className="logo_container text-light text-center h1 mt-5">
                  suggest a{" "}
                  <span className="fw-bold text-warning">Restaurant</span> to
                  our website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
