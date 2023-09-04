import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="home" className="flex items-center px-2">
              <img
                src="data:image/png;base64,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"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="font-semibold text-gray-900 text-lg">
                MedReach Healthcare
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-900">
                From the doctors to the support staff, everyone is dedicated to
                ensuring your health journey is smooth and successful{" "}
              </p>
              <p className="mt-4 text-sm text-gray-900">
                "Where Compassion Meets Excellence - Your Trusted Partner in
                Comprehensive Medical Care."
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-900">Phone:</p>
              <a
                href="tel:+92-313-8667347"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +92-313-8667347
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-900">Email:</p>
              <a
                href="mailto:abdullahjafri8@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@lorem.mail
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-900">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-900 transition-colors duration-300 hover:text-purple-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-900 transition-colors duration-300 hover:text-purple-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-900 transition-colors duration-300 hover:text-purple-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-900">
              "Joining Hands for Healthier Lives."{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-900">
            © Copyright 2020 MedReach Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
