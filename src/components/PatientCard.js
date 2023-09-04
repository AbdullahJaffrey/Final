import React from "react";
import "./styles.css";

const PatientCard = ({ patient, onEdit, onDelete }) => {
  if (
    !patient ||
    (!patient.Name &&
      !patient.image &&
      !patient.Education &&
      !patient.Experience &&
      !patient.Condition &&
      !patient.AppointmentDate &&
      !patient.Notes)
  ) {
    return null;
  }

  return (
    <div className="border p-4 mb-4 flex flex-col">
      {patient.image && (
        <img src={patient.image} alt="Patient" className="mb-2 max-h-32" />
      )}
      {patient.Name && <p>Patient Name: {patient.Name}</p>}
      {patient.Condition && <p>Condition: {patient.Condition}</p>}
      {patient.AppointmentDate && (
        <p>Appointment Date: {patient.AppointmentDate}</p>
      )}
      {patient.Notes && <p>Notes: {patient.Notes}</p>}

      <div className="mt-4 space-x-2">
        <button
          onClick={() => onEdit(patient)}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PatientCard;
