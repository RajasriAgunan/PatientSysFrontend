import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { savePatient } from '../services/PatientsService';

const PatientForm = () => {
  const { id } = useParams();
const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [disease,setDisease]=useState("");
  const navigate = useNavigate();

      const pageTitle = () => {
      return id ? (
        <h2 className="text-center">Update Details</h2>
      ) : (
        <h2 className="text-center">Add Patient</h2>
      );
    };
    const saveOrUpdatePatient = async (e) => {
      e.preventDefault();
  
      const patient = {name:name, email: email,phone:phone, address:address,disease:disease};
      console.log(patient);
  
      try {
        if (id) {
          await updatePatient(id, patient)
          navigate("/patients");
        } else {
          const response = await savePatient(patient);
          console.log(response.data);
          navigate("/patients");
        }
       } catch(error) {
        console.error(error);
      }
    };
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) {
            const response = await getPatient(id);
            console.log(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setAddress(response.data.address);
            setDisease(response.data.disease);
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
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Disease</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Disease"
                name="disease"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
              />
            </div>

            <button
              className="btn btn-success"
              onClick={(e) => saveOrUpdatePatient(e)}
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

export default PatientForm
