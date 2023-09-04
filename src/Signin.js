import React, { useState } from "react";
import "./style.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import AdminDoctors from "./components/AdminDoctors";
import AdminPatient from "./components/AdminPatient";

const SignIn = () => {
  const [userType, setUserType] = useState(""); // Add state to track user type
  const [email, setEmail] = useState(""); // Add state to track user's email

  // Function to handle user type selection
  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  // Function to handle email input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white relative lg:py-20">
        <div className="flex flex-col items-center justify-between pt-0 pr-2 pb-0 pl-2 md:pr-10 md:pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img
                  src="./images/login_doctor.jpg"
                  className="hidden md:block img-login hue-rotate-60"
                  alt="Login Doctor"
                />
              </div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                  Sign In for an account
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      placeholder="123@ex.com"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Password
                    </p>
                    <input
                      placeholder="Password"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="relative">
                    <div className="flex mt-2 mr-2 radio-signup-margin">
                      <label className="mr-4">
                        <input
                          className="mx-2 text-purple-400"
                          type="radio"
                          name="userType"
                          value="patient"
                          onChange={() => handleUserTypeSelection("patient")}
                        />
                        Patient
                      </label>
                      <label>
                        <input
                          className="mx-2 text-purple-400"
                          type="radio"
                          name="userType"
                          value="doctor"
                          onChange={() => handleUserTypeSelection("doctor")}
                        />
                        Doctor
                      </label>
                    </div>
                  </div>
                  <div className="relative">
                    <a
                      href="/"
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-purple-400 rounded-lg transition duration-200 hover:bg-purple-700 ease"
                    >
                      Submit
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-900">
                      No Account?
                      <a
                        className="w-full inline-block mt-4 font-500 pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-purple-400 rounded-lg transition duration-200 hover:bg-purple-700 ease"
                        href="signup"
                      >
                        SignUp Now.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {userType === "patient" && <AdminPatient />}
      {userType === "doctor" && <AdminDoctors />}
      {/* <Footer /> */}
    </>
  );
};

export default SignIn;
