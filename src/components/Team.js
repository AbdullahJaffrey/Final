import React from "react";
const TeamSection = () => {
  return (
    <>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <div className="mx-auto mb-10 lg:max-w-xxl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-teal-accent-400">
            Meet Our Dedicated Team of Healthcare Experts
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://tinyurl.com/2tzu7zxy"
                alt="Medical Director"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Dr. Emily Turner</p>
              <p className="mb-5 text-xs text-gray-800">
                {" "}
                Medical Director and Family Physician
              </p>
              <a
                href="/finddoctor"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Meet Me.
              </a>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://tinyurl.com/2p8t6u9y"
                alt="Cardiologist"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Dr. Michael Stewart</p>
              <p className="mb-5 text-xs text-gray-800">Cardiologist</p>
              <a
                href="/finddoctor"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Meet Me.
              </a>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://tinyurl.com/mr4xphke"
                alt="Nurse Practitioner"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Dr. Sarah Collins</p>
              <p className="mb-5 text-xs text-gray-800">Nurse Practitioner</p>
              <a
                href="/finddoctor"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Meet Me.
              </a>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://tinyurl.com/5h7pccm4"
                alt="Dermatologist"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Dr. Ashkan Forouzani </p>
              <p className="mb-5 text-xs text-gray-800">Dermatologist</p>
              <a
                href="/finddoctor"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
              >
                Meet Me.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
