import React from "react";

export default function About() {
  return (
    <div className=" d-flex justify-content-center align-items-center about-bg flex-column text-white">
      <div className="container ">
        <h1 className="text-center fw-bolder text-uppercase">ABOUT COMPONENT</h1>
        <div className="text-center d-flex w-full justify-content-center ">
          <div className="bg-white mt-2 mx-2" Style="width: 80px; height:4px" ></div>
          <i className="fa fa-star"></i>

          <div className="bg-white mt-2 mx-2" Style="width: 80px; height:4px" ></div>


        </div>
        <div Style="padding-right:80px ; padding-left:80px" className="mt-3">
          <div className="row">
            <div className="col-md-6">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes <br/> the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes <br/> the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}
