import axios from "axios";
const PATIENT_API_URL="http://localhost:9090/patients";


export const getAllPatients=() => axios.get(PATIENT_API_URL);
export const savePatient=() => axios.post(PATIENT_API_URL);
export const getPatient=(id)=>axios.get(PATIENT_API_URL+"/"+id);
export const updatePatient=(id,patient)=>axios.put(PATIENT_API_URL+"/"+ id,patient);
export const deletePatient=(id)=>axios.delete(PATIENT_API_URL+"/"+id);



