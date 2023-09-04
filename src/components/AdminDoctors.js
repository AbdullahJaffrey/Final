import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import DoctorForm from "./DoctorForm";
import "./styles.css";

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleEditDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleDeleteDoctor = (doctorId) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== doctorId));
    setSelectedDoctor(null);
  };

  const handleAddDoctor = (newDoctor) => {
    if (selectedDoctor) {
      setDoctors(
        doctors.map((doctor) =>
          doctor.id === selectedDoctor.id
            ? { ...newDoctor, id: selectedDoctor.id }
            : doctor
        )
      );
    } else {
      setDoctors([...doctors, { ...newDoctor, id: Date.now() }]);
    }
    setSelectedDoctor(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Doctor Admin Panel</h1>
      <h2 className="text-center text-2xl font-semibold mb-4">
        Doctor Management
      </h2>
      {selectedDoctor ? (
        <DoctorForm
          className="text-center"
          doctor={selectedDoctor}
          onSave={handleAddDoctor}
        />
      ) : (
        <DoctorForm onSave={handleAddDoctor} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onEdit={() => handleEditDoctor(doctor)}
            onDelete={() => handleDeleteDoctor(doctor.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDoctors;
