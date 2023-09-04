import React from "react";

const ServicesSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <i className="fas fa-briefcase-medical"></i>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Primary Care
          </h6>
          <div className="mb-2 text-gray-700">
            Offering general health check-ups, screenings, and routine medical
            care to maintain overall well-being.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <i className="fas fa-user-nurse"></i>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Specialty Consultations
          </h6>
          <div className="mb-2 text-gray-700">
            Bringing in specialists from various fields to address specific
            health concerns, such as cardiology, dermatology, etc.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <i className="fas fa-pills"></i>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Physical Therapy
          </h6>
          <div className="mb-2 text-gray-700">
            Providing rehabilitation services for injuries, surgeries, or
            chronic pain conditions.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <i className="fas fa-brain"></i>
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Mental Health Services
          </h6>
          <div className="mb-2 text-gray-700">
            Collaborating with mental health professionals to offer therapy and
            support for emotional well-being.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
