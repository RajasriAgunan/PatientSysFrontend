import axios from "axios";
const MEDICATION_API_URL="http://localhost:9090/medications";


export const getAllMedications=() => axios.get(MEDICATION_API_URL);
export const saveMedication=() => axios.post(MEDICATION_API_URL);
export const getMedication=(id)=>axios.get(MEDICATION_API_URL+"/"+id);
export const updateMedication=(id,medication)=>axios.put(MEDICATION_API_URL +"/"+ id,medication);
export const deleteMedication=(id)=>axios.delete(MEDICATION_API_URL+"/"+id);
