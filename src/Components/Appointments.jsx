import React, { useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteAppointment, getAllAppointments } from '../services/Appointments';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    Appointments();
  }, []);
  const Appointments = async () => {
    try {
      const response = await getAllAppointments();
      setAppointments(response.data);
      console.log(response.data);
      console.log(appointments);
    } catch (error) {
      console.error(error);
    }
  };
  
  function addAppointment() {
    navigate("/add-appointment");
  }
  
  const removeAppointment = async (id) => {
    try {
      const response = await deleteAppointment(id);
      Appointments();
    } catch (error) {
      console.log(error);
    }
  };
  
  
    return (      
         <div className="container">
        <h2 className="text-center my-4">Appointments</h2>
        <Button variant="primary" className="mb-3" onClick={addAppointment}>
          Fix Appointment
        </Button>
  
        <ListGroup>
  
        {appointments.map((appointment, index) => (
            <ListGroup.Item key={appointment.id || index} 
            className="d-flex justify-content-between align-items-center">
              <div>
                <div><strong>AppointmentTime:</strong> {appointment.appointmentTime}</div>
                <div><strong>PatientId:</strong> {appointment.patientId}</div>
                <div><strong>DoctorId:</strong> {appointment.doctorId}</div>

              </div>
              <div>
              
                <Button
                  variant="danger"
                  onClick={() => removeAppointment(appointment.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
    
      </div>
  
  )
}

export default Appointments
