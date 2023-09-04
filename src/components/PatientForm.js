import React, { useState, useEffect } from "react";
import "./styles.css";

const PatientForm = ({ patient: initialPatient = "", onSave }) => {
  const [patient, setPatient] = useState({ ...initialPatient });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setPatient({ ...initialPatient });
  }, [initialPatient]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  const handleDaySelect = (selectedDay) => {
    setPatient((prevPatient) => ({
      ...prevPatient,
      appointmentDay: selectedDay
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setPatient((prevPatient) => ({
        ...prevPatient,
        image: event.target.result
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      patient.Name === "" ||
      patient.Condition === "" ||
      patient.AppointmentDate === ""
    ) {
      setShowPopup(true);
      return;
    }

    onSave(patient);
    setPatient({ ...initialPatient });
    setShowPopup(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h3 className="text-xl font-semibold mb-2">
        {initialPatient.id ? "Edit Patient" : "Add Patient"}
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
            value={patient.Name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Condition
          </label>
          <input
            type="text"
            name="Condition"
            value={patient.Condition}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Appointment Date
          </label>
          <input
            type="date"
            name="AppointmentDate"
            value={patient.AppointmentDate}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Notes
          </label>
          <textarea
            name="Notes"
            value={patient.Notes}
            onChange={handleChange}
            className="border rounded p-2 w-full h-32"
          />
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
          {patient.image && (
            <img src={patient.image} alt="Patient" className="mt-2 max-h-32" />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-purple-400 text-white rounded p-2 px-4"
      >
        {initialPatient.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default PatientForm;
