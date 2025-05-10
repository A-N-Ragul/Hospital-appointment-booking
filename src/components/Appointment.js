import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Appointment.css";

const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Lee"];
const slots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"];

function Appointment() {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    email: "",
    gender: "",
    DOB: "",
    mobile: "",
    disease: "",
    address: "",
    bloodGroup: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("patientDetails", JSON.stringify(formData));
    navigate("/details");
  };
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("appointments")) || [];
    setBookedSlots(saved);
}, []);

  const handleBook = () => {
    const fullData = { ...formData, doctor, time, timestamp: Date.now() };
     localStorage.setItem("patientDetails", JSON.stringify(fullData));
    const newBooking = { doctor, time, timestamp: Date.now() };
    const updated = [...bookedSlots, newBooking];
    
    localStorage.setItem("appointments", JSON.stringify(updated));
     setSuccessMessage("✅ Appointment successfully booked!");

  setTimeout(() => {
    setSuccessMessage("");
    navigate("/details");
  }, 2000); 
  };

  const isSlotBooked = (doc, t) =>
    bookedSlots.some(
      (b) => b.doctor === doc && b.time === t && Date.now() - b.timestamp < 3600000
    );

  return (
    <>

    <div className="appointment-container">
      <h3>Book Appointment</h3>
      <div className="container">
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Patient</h1>

            <form >
              <div>
                <label>Patient Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="patientName"
                   value={formData.patientName}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>
         
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                 value={formData.age}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>
             
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    name="email"
                   value={formData.email}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
              value={formData.gender}
  onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="dateofAppointment">
                <p>Birth Date</p>
                <div className="inputdiv">
                  <input
                    type={"date"}
                    placeholder="Choose Date"
                    name="DOB"
              value={formData.DOB}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>
             
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="mobile"
               value={formData.mobile}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>

             

              <div>
                <label>Disease</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Disease"
                    name="disease"
                  value={formData.disease}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                  value={formData.address}
  onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Blood Group</label>
                <div className="inputdiv">
                  <select
                    name="bloodGroup"
                     value={formData.bloodGroup}
  onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <select onChange={(e) => setDoctor(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select Doctor
        </option>
        {doctors.map((doc, i) => (
          <option key={i} value={doc}>
            {doc}
          </option>
        ))}
      </select>

      <div className="slots">
        {slots.map((t, i) =>
          isSlotBooked(doctor, t) ? null : (
            <button
              key={i}
              className={time === t ? "selected" : ""}
              onClick={() => setTime(t)}
            >
              {t}
            </button>
          )
        )}
      </div>
      <button
        className="book-button"
        onClick={handleBook}
        disabled={!doctor || !time}
      >
        Book Appointment
      </button>
      {successMessage && (
  <div className="success-box">{successMessage}</div>
)}
    </div>
    </>
  );
}

export default Appointment;
