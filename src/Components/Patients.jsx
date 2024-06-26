import React, { useEffect, useState } from 'react'
import { deletePatient, getAllPatients } from '../services/PatientsService';
import { Button, ListGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Patients = () => {
  const [patients, setPatients] = useState([]);
const navigate=useNavigate();
useEffect(() => {
  patientDetails();
}, []);
const patientDetails = async () => {
  try {
    const response = await getAllPatients();
    setPatients(response.data);
    console.log(response.data);
    console.log(patients);
  } catch (error) {
    console.error(error);
  }
};

function addPatient() {
  navigate("/add-patient");
}
function updatePatient(id) {
  navigate(`/update-patient/${id}`);
}
const removePatient = async (id) => {
  try {
    const response = await deletePatient(id);
    patientDetails();
  } catch (error) {
    console.log(error);
  }
};


  return (      
       <div className="container">
      <h2 className="text-center my-4">Patients Info</h2>
      <Button variant="primary" className="mb-3" onClick={addPatient}>
        Add Patient
      </Button>

      <ListGroup>

      {patients.map((patient, index) => (
          <ListGroup.Item key={patient.id || index} className="d-flex justify-content-between align-items-center">
            <div>
              <div><strong>Name:</strong> {patient.name}</div>
              <div><strong>Email:</strong> {patient.email}</div>
              <div><strong>Phone:</strong> {patient.phone}</div>
              <div><strong>Address:</strong> {patient.address}</div>
              <div><strong>Disease:</strong> {patient.disease}</div>
            </div>
            <div>
              <Button
                variant="info"
                className="mr-2"
                onClick={() => updatePatient(patient.id)}
              >
                Update
              </Button>
              <Button
                variant="danger"
                onClick={() => removePatient(patient.id)}
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

export default Patients
