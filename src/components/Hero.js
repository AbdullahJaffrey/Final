import React from "react";

const HeroSection = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              "Your Health, Our Priority:
              <br className="hidden md:block" />
              <span className="inline-block px-1 md:px-0 text-purple-400 hover:text-purple-700">
                Thrive."
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              At our clinic, we believe in the power of unity when it comes to
              your health. We are dedicated to fostering collaboration between
              our medical experts and patients, working hand in hand to achieve
              optimal well-being. Your journey to better health is a joint
              effort, and we're here to support you every step of the way.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/signup"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Register Now.
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
