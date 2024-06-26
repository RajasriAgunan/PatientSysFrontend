import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getMedication, saveMedication, updateMedication } from '../services/MedicationsService';

const MedicationForm = () => {
  const { id } = useParams();
  const [medication_name,setMedication_Name]=useState("");
  const [dosage,setDosage]=useState("");

  const [instructions,setInstructions]=useState("");

  const navigate = useNavigate();
  
  const pageTitle = () => {
        return id ? (
          <h2 className="text-center">Update Medication</h2>
        ) : (
          <h2 className="text-center">Add Medication</h2>
        );
      };
      const saveOrUpdateMedication = async (e) => {
        e.preventDefault();
    
        const medication= {medication_name:medication_name, dosage: dosage,instructions:instructions};
        console.log(medication);
    
        try {
          if (id) {
            await updateMedication(id,medication)
            navigate("/medications");
          } else {
            const response = await saveMedication(medication);
            console.log(response.data);
            navigate("/medictions");
          }
         } catch(error) {
          console.error(error);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              const response = await getMedication(id);
              console.log(response.data);
              setMedication_Name(response.data.medication_name);
              setDosage(response.data.dosage);
              setInstructions(response.data.instructions);
              
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
                <label className="form-label">Medication_Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medication_Name"
                  name="medication_name"
                  value={medication_name}
                  onChange={(e) => setMedication_Name(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Dosage</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="dosage"
                  name="dosage"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Instructions</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Instructions"
                  name="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateMedication(e)}
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

export default MedicationForm
