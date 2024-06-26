import axios from "axios";
const DOCTOR_API_URL="http://localhost:9090/doctors";

export const getAllDoctors=() => axios.get(DOCTOR_API_URL);
export const saveDoctor=() => axios.post(DOCTOR_API_URL);
export const updateDoctor=(id,doctor)=>axios.put(DOCTOR_API_URL +"/"+ id,doctor);
export const deleteDoctor=(id)=>axios.delete(DOCTOR_API_URL+"/"+id);export const getDoctor=(id)=>axios.get(DOCTOR_API_URL+"/"+id);
