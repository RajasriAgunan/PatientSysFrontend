import axios from "axios";
const APPOINTMENT_API_URL="http://localhost:9090/appointments";


export const getAllAppointments=() => axios.get(APPOINTMENT_API_URL);
export const saveAppointment=() => axios.post(APPOINTMENT_API_URL);

export const getAppointment=(id)=>axios.get(APPOINTMENT_API_URL+"/"+id);
export const deleteAppointment=(id)=>axios.delete(APPOINTMENT_API_URL+"/"+id);