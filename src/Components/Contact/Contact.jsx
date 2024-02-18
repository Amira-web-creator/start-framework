import React from "react";

export default function Contact() {
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column text-dark contact">
      <div className="container ">
        <h1 className="text-center fw-bolder pt-4" Style="color:rgb(44, 62, 80)">
          Contact SECTION
        </h1>
        <div className="text-center d-flex w-full justify-content-center ">
          <div
            className=" mt-2 mx-2"
            Style="width: 80px; height:4px ; background-color: rgb(44, 62, 80)"
          ></div>
          <i className="fa fa-star" Style="color:rgb(44, 62, 80)"></i>

          <div
            className=" mt-2 mx-2"
            Style="width: 80px; height:4px ; background-color: rgb(44, 62, 80)"
          ></div>
        </div>

        <div className="container">
          <div className="row">
            <form className="w-100">
              <div className="w-50 m-auto">
                <div class="input-field mb-3">
                  <label className="relative">userName</label>
                  <input
                    className="form-control px-4 border-0 border-bottom outline-0 p-3 border-[#dee2e6]"
                    type="text"
                    placeholder="userName"
                  />
                </div>

                <div class="input-field mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    userAge
                  </label>
                  <input
                    className="form-control px-4 border-0 border-bottom outline-0 p-3 border-[#dee2e6]"
                    type="text"
                    placeholder="userAge"
                  />
                </div>
                <div class="input-field mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    userEmail
                  </label>
                  <input
                    className="form-control px-4 border-0 border-bottom outline-0 p-3 border-[#dee2e6]"
                    type="text"
                    placeholder="userEmail"
                  />
                </div>
                <div class="input-field mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    userPassword
                  </label>
                  <input
                    className="form-control px-4 border-0 border-bottom outline-0  outline-0 p-3 border-[#dee2e6]"
                    type="text"
                    placeholder="userPassword"
                  />
                </div>
                <br></br>

                <button
                  className="btn mt-4 text-white"
                  Style="background-color: #1abc9c;"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
