import React, { useEffect, useState } from "react";
import "../styles/Details.css";

function Details() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patientDetails"));
    setDetails(data);
  }, []);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <h2 className="animated-header">Appointment Details</h2>
      <div className="card">
        {Object.entries(details).map(([key, value]) => (
          <p key={key}>
            <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Details;
