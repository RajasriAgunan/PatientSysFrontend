import React, { useEffect, useState } from 'react'
import { deleteDoctor, getAllDoctors, updateDoctor } from '../services/DoctorsService';
import { useNavigate } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    DoctorSpezalisation();
  }, []);
  const DoctorSpezalisation = async () => {
    try {
      const response = await getAllDoctors();
      setDoctors(response.data);
      console.log(response.data);
      console.log(doctors);
    } catch (error) {
      console.error(error);
    }
  };
  
  function addDoctor() {
    navigate("/add-doctor");
  }
  function updateDoctor(id) {
    navigate(`/update-doctor/${id}`);
  }
  const removeDoctor = async (id) => {
    try {
      const response = await deleteDoctor(id);
      DoctorSpezalisation();
    } catch (error) {
      console.log(error);
    }
  };
  
  
    return (      
         <div className="container">
        <h2 className="text-center my-4">Our Doctor</h2>
        <Button variant="primary" className="mb-3" onClick={addDoctor}>
          Add Doctor
        </Button>
  
        <ListGroup>
  
        {doctors.map((doctor, index) => (
            <ListGroup.Item key={doctor.id || index} className="d-flex justify-content-between align-items-center">
              <div>
                <div><strong>Name:</strong> {doctor.name}</div>
                <div><strong>Specialization:</strong> {doctor.specialization}</div>
                <div><strong>Email:</strong> {doctor.email}</div>
                <div><strong>Degree:</strong> {doctor.degree}</div>
                
              </div>
              <div>
                <Button
                  variant="info"
                  className="mr-2"
                  onClick={() => updateDoctor(doctor.id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => removeDoctor(doctor.id)}
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

export default Doctors
