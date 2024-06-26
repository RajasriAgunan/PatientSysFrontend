import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderSection from './Components/HeaderSection'
import Home from './Components/Home'
import Patients from './Components/Patients'
import PatientForm from './Components/PatientForm'
import Doctors from './Components/Doctors'
import DoctorForm from './Components/DoctorForm'
import Appointments from './Components/Appointments'
import AppointmentForm from './Components/AppointmentForm'
import Medications from './Components/Medications'
import MedicationForm from './Components/MedicationForm'
import FooterSection from './Components/FooterSection'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderSection />
    {
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/patients" element={<Patients />}></Route>
            <Route path="/add-patient" element={<PatientForm />}></Route> 
            <Route path="/update-patient/:id" element={<PatientForm />}></Route> 
            <Route path="/doctors" element={<Doctors/>}></Route> 
            <Route path="/add-doctor" element={<DoctorForm />}></Route> 
            <Route path="/update-doctor/:id" element={<DoctorForm />}></Route> 
            <Route path="/appointments" element={<Appointments />} ></Route>
            <Route path="/add-appointment" element={<AppointmentForm />} ></Route>
            <Route path="/medications" element={<Medications />} />
            <Route path="/add-medication" element={<MedicationForm />} />
            <Route path="/update-medication/:id" element={<MedicationForm />} />
</Routes>
    }
    <FooterSection /> 
    </BrowserRouter>
    </>
  )
}

export default App
