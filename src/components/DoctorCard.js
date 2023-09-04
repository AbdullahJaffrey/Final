import React from "react";
import "./styles.css";

const DoctorCard = ({ doctor, onEdit, onDelete }) => {
  if (
    !doctor ||
    (!doctor.Name &&
      !doctor.image &&
      !doctor.Education &&
      !doctor.Experience &&
      !doctor.Specialization &&
      !doctor.timings &&
      !doctor.days)
  ) {
    return null;
  }

  return (
    <div className="border p-4 mb-4 flex flex-col">
      {doctor.image && (
        <img src={doctor.image} alt="Doctor" className="mb-2 max-h-32" />
      )}
      {doctor.Name && <p>Doctor Name: {doctor.Name}</p>}
      {doctor.Specialization && <p>Specialization: {doctor.Specialization}</p>}

      {doctor.timings && <p>Timings: {doctor.timings}</p>}
      {doctor.days && <p>Days: {doctor.days}</p>}

      <div className="mt-4 space-x-2">
        <button
          onClick={() => onEdit(doctor)}
          className="bg-purple-400 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(doctor.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
