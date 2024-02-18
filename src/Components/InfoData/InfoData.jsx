import React from "react";

export default function InfoData() {
  return (
    <div className="infobg text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex media justify-content-center align-items-center mx-1">
              <i className="fa-brands fa-facebook justify-content-center  align-items-center mx-1"></i>
              <i className="fa-brands fa-twitter justify-content-center align-items-center mx-1"></i>
              <i className="fa-brands fa-linkedin-in justify-center align-items-center mx-1"></i>
              <i
                className="fa-solid fa-globe justify-content-center align-items-center mx-1.
              "
              ></i>
            </div>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
