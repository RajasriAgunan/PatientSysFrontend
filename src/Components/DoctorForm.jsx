import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDoctor, saveDoctor, updateDoctor } from '../services/DoctorsService';

const DoctorForm = () => {
  const { id } = useParams();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

  const [specialization,setSpecialization]=useState("");

   const [degree,setDegree]=useState("");
    
    const navigate = useNavigate();
  
        const pageTitle = () => {
        return id ? (
          <h2 className="text-center">Update Details</h2>
        ) : (
          <h2 className="text-center">Add Info</h2>
        );
      };
      const saveOrUpdateDoctor = async (e) => {
        e.preventDefault();
    
        const doctor = {name:name, email: email,specialization:specialization,degree:degree};
        console.log(doctor);
    
        try {
          if (id) {
            await updateDoctor(id, doctor)
            navigate("/doctors");
          } else {
            const response = await saveDoctor(doctor);
            console.log(response.data);
            navigate("/doctors");
          }
         } catch(error) {
          console.error(error);
        }
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            if (id) {
              const response = await getDoctor(id);
              console.log(response.data);
              setName(response.data.name);
              setEmail(response.data.email);
              setSpecialization(response.data.phone);
              setDegree(response.data.degree);
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
                <label className="form-label">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Specialization"
                  name="specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Degree"
                  name="degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveOrUpdateDoctor(e)}
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

export default DoctorForm
