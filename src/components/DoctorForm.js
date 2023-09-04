import React, { useState, useEffect } from "react";
import "./styles.css";

const DoctorForm = ({ doctor: initialDoctor = "", onSave }) => {
  const [doctor, setDoctor] = useState({ ...initialDoctor });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setDoctor({ ...initialDoctor });
  }, [initialDoctor]);

  // for local storage
  // useEffect(() => {
  //   const savedDoctorData = localStorage.getItem("savedDoctorData");
  //   if (savedDoctorData) {
  //     setDoctor(JSON.parse(savedDoctorData));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("savedDoctorData", JSON.stringify(doctor));
  // }, [doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDoctor((prevDoctor) => ({ ...prevDoctor, [name]: value }));
  };

  const handleDaySelect = (selectedDay) => {
    setDoctor((prevDoctor) => ({ ...prevDoctor, days: selectedDay }));
  };

  const handleTimingSelect = (selectedTiming) => {
    setDoctor((prevDoctor) => ({ ...prevDoctor, timings: selectedTiming }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setDoctor((prevDoctor) => ({
        ...prevDoctor,
        image: event.target.result
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      doctor.name === "" ||
      doctor.Education === "" ||
      doctor.Experience === "" ||
      doctor.Specialization === ""
    ) {
      setShowPopup(true);
      return;
    }

    onSave(doctor);
    setDoctor({ ...initialDoctor });
    setShowPopup(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h3 className="text-xl font-semibold mb-2">
        {initialDoctor.id ? "Edit Doctor" : "Add Doctor"}
      </h3>
      {showPopup && (
        <div className="popup">Kindly share your details properly.</div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="Name"
            value={doctor.Name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Education
          </label>
          <input
            type="text"
            name="Education"
            value={doctor.Education}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Experience (years)
          </label>
          <input
            type="number"
            name="Experience"
            value={doctor.Experience}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Specialization
          </label>
          <input
            type="text"
            name="Specialization"
            value={doctor.Specialization}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Timings
          </label>
          <div className="flex number-btn space-x-2">
            <button
              type="button"
              onClick={() => handleTimingSelect("9-12")}
              className={`rounded p-2 ${
                doctor.timings === "9-12"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              9-12
            </button>
            <button
              type="button"
              onClick={() => handleTimingSelect("12-3")}
              className={`rounded p-2 ${
                doctor.timings === "12-3"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              12-3
            </button>
            <button
              type="button"
              onClick={() => handleTimingSelect("4-7")}
              className={`rounded p-2 ${
                doctor.timings === "4-7"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              4-7
            </button>
            <button
              type="button"
              onClick={() => handleTimingSelect("8-10")}
              className={`rounded p-2 ${
                doctor.timings === "8-10"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              8-10
            </button>
            <button
              type="button"
              onClick={() => handleTimingSelect("10-12")}
              className={`rounded p-2 ${
                doctor.timings === "10-12"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              10-12
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Days</label>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => handleDaySelect("Monday")}
              className={`rounded p-2 ${
                doctor.days === "Monday"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Mon
            </button>
            <button
              type="button"
              onClick={() => handleDaySelect("Tuesday")}
              className={`rounded p-2 ${
                doctor.days === "Tuesday"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Tues
            </button>
            <button
              type="button"
              onClick={() => handleDaySelect("Wednesday")}
              className={`rounded p-2 ${
                doctor.days === "Wednesday"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Wed
            </button>
            <button
              type="button"
              onClick={() => handleDaySelect("Thursday")}
              className={`rounded p-2 ${
                doctor.days === "Thursday"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Thurs
            </button>
            <button
              type="button"
              onClick={() => handleDaySelect("Friday")}
              className={`rounded p-2 ${
                doctor.days === "Friday"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Friday
            </button>
            <button
              type="button"
              disabled
              onClick={() => handleDaySelect("SatSun")}
              className={`rounded p-2 ${
                doctor.days === "SatSun"
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <del> Sat & Sunday off</del>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded p-2 w-full"
          />
          {doctor.image && (
            <img src={doctor.image} alt="Doctor" className="mt-2 max-h-32" />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-purple-400 text-white rounded p-2 px-4"
      >
        {initialDoctor.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default DoctorForm;
