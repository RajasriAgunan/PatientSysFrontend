import React, { useEffect, useState } from 'react'
import { getAppointment, saveAppointment } from '../services/Appointments';
import { useNavigate, useParams } from 'react-router-dom';

const AppointmentForm = () => {
  const { id } = useParams();
  const [appointmentTime,setAppointmentTime]=useState("");
  const [patientId,setPatientId]=useState("");
  const [doctorId,setDoctorId]=useState("");

const navigate = useNavigate();
  
        const pageTitle = () => {
        return id ? (
          <h2 className="text-center">Update Appointment</h2>
        ) : (
          <h2 className="text-center">Add Appointment</h2>
        );
      };

      const saveOrUpdateAppointment = async (e) => {
        e.preventDefault();
    
        const appointment = {appointmentTime:appointmentTime, patientId:patientId,doctorId:doctorId};
        console.log(appointment);
    
        try {
    
            const response = await saveAppointment(appointment);
            console.log(response.data);
            navigate("/appointments");
          
         } catch(error) {
          console.error(error);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              const response = await getAppointment(id);
              console.log(response.data);
              setAppointmentTime(response.data.time);
              setPatientId(response.data.patientId);
              setDoctorId(response.data.setDoctorId);
              
            }
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [id]);
    
  
    
    return (
      <div className="container">
      <div className="row">
        <div className="card-col-md-6 offser-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Date&Time</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fix the Appointment"
                  name="appointmentTime"
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">PatientId</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PatientId"
                  name="patientId"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">DoctorId</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter DoctorId"
                  name="doctorId"
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateAppointment(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm
