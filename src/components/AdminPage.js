import React, { useState, useEffect } from "react";
import "../styles/Admin.css";

function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  const handleRemove = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  const handleRestore = () => {
    const restoredAppointments = appointments.filter(
      (appointment) => Date.now() - appointment.timestamp > 3600000
    );
    localStorage.setItem("appointments", JSON.stringify(restoredAppointments));
    setAppointments(restoredAppointments);
  };

  return (
    <div className="admin-container">
      <h3>Admin Panel</h3>
      <button className="restore-button" onClick={handleRestore}>
        Restore Available Slots
      </button>
      <h4>Booked Appointments</h4>
      <ul className="lily">
        {appointments.map((a, i) => (
          <li className="lily" key={i}>
            {a.doctor} - {a.time}
            <button
              className="remove-button"
              onClick={() => handleRemove(i)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
