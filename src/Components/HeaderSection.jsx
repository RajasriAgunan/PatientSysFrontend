import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderSection = () => {
  return (
    <div>
            <header>

      <nav className="navbar navbar-expand-md navbar-dark-bg-dark navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div>
                <a href="http://localhost:3000" className="navbar-brand">PatientManagemntAppSys</a>
            </div>
             <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                 <li className="nav-item"> 
                <NavLink to="/patients" className="nav-link">PatientsInfo</NavLink>
                </li>
                 <li className="nav-item"> 
                <NavLink to="/doctors" className="nav-link">OurDoctors</NavLink>
                </li>
               <li className="nav-item"> 
                <NavLink to="/Appointments" className="nav-link">GetAppointments</NavLink>
                </li>
                <li className="nav-item"> 
                <NavLink to="/Medications" className="nav-link">MedicationDetails</NavLink>
                </li>
                <li className="nav-item"> 
                <NavLink to="/login" className="nav-link">Login</NavLink>
                </li>
              
           <li className="nav-item"> 
                <NavLink to="/logout" className="nav-link">Logout</NavLink>
                </li>
              </ul>
              </div> 
        </nav>
      </header>
    </div>
  )
}

export default HeaderSection
