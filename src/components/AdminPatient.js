import React, { useState } from "react";
import PatientCard from "./PatientCard";
import PatientForm from "./PatientForm";
import "./styles.css";

const AdminPatient = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleEditPatient = (patient) => {
    setSelectedPatient(patient);
  };

  const handleDeletePatient = (patientId) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));
    setSelectedPatient(null);
  };

  const handleAddPatient = (newPatient) => {
    if (selectedPatient) {
      setPatients(
        patients.map((patient) =>
          patient.id === selectedPatient.id
            ? { ...newPatient, id: selectedPatient.id }
            : patient
        )
      );
    } else {
      setPatients([...patients, { ...newPatient, id: Date.now() }]);
    }
    setSelectedPatient(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Patient Admin Panel</h1>
      <h2 className="text-center text-2xl font-semibold mb-4">
        Patient Profile
      </h2>
      {selectedPatient ? (
        <PatientForm
          className="text-center"
          patient={selectedPatient}
          onSave={handleAddPatient}
        />
      ) : (
        <PatientForm onSave={handleAddPatient} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onEdit={() => handleEditPatient(patient)}
            onDelete={() => handleDeletePatient(patient.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPatient;
