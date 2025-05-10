import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homenew from "./components/Homenew";
import Aboutus from "./components/Aboutus";
import Service from "./components/Service";
import BookingPage from "./components/Booking";
import AppointmentBooking from "./components/Appointment";
import Newbooking from "./components/Booking";
import Details from "./components/DetailsPage";
import Admin from "./components/AdminPage";
import LoginForm from "./pages/LoginFrom";
import RegistrationForm from "./pages/RegistrationFrom";


function App() {
  const [userDetails, setUserDetails] = useState(null); 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Reg" element={<RegistrationForm />} />

        <Route path="/home" element={<Homenew />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Service />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/details" element={<Details/>}/>
        <Route path="/newbooking" element={<Newbooking setUserDetails={setUserDetails} />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;
