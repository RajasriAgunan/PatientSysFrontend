import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteMedication, getAllMedications, getMedication } from '../services/MedicationsService';
import { Button, ListGroup } from 'react-bootstrap';

const Medications = () => {
  const [medications, setMedications] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    Medications();
  }, []);
  const Medications = async () => {
    try {
      const response = await getAllMedications();
      setMedications(response.data);
      console.log(response.data);
      console.log(doctors);
    } catch (error) {
      console.error(error);
    }
  };
  
  function addMedication() {
    navigate("/add-medication");
  }
  function updateMedication(id) {
    navigate(`/update-medication/${id}`);
  }
  const removeMedication = async (id) => {
    try {
      const response = await deleteMedication(id);
      Medications();
    } catch (error) {
      console.log(error);
    }
  };
  
  
    return (      
         <div className="container">
        <h2 className="text-center my-4">MedicationDetails</h2>
        <Button variant="primary" className="mb-3" onClick={addMedication}>
       Add Medcation
        </Button>
  
        <ListGroup>
  
        {medications.map((medication, index) => (
            <ListGroup.Item key={medication.id || index} className="d-flex justify-content-between align-items-center">
              <div>
                <div><strong>Medication_Name:</strong> {medication.medication_name}</div>
                <div><strong>Dosage:</strong> {medication.dosage}</div>
                <div><strong>Instructions:</strong> {medication.instructions}</div>
          
                
              </div>
              <div>
                <Button
                  variant="info"
                  className="mr-2"
                  onClick={() => updateMedication(medication.id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => removeMedication(medication.id)}
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

export default Medications
