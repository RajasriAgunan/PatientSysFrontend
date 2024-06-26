import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { getAllAppointments } from '../services/Appointments';
import { getAllDoctors } from '../services/DoctorsService';


const Home = () => {
  const [appointments,setAppointments] = useState([]);
  const [doctors,setDoctors] = useState([]);

  useEffect(() => {
    getAllAppointments()
      .then(response => setAppointments(response.data))
      .catch(error => console.error('Error fetching appointments:', error));

    getAllDoctors()
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error)); // Handle the error
  }, []);


  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Welcome!</h2>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Upcoming Appointments</Card.Title>
              <ul className="list-unstyled">
                {appointments.map((appointment) => (
                  <li key={appointment.id}>
                    {appointment.date} - {appointment.time} with {appointment.doctor}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="mt-3">View All Appointments</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Notifications</Card.Title>
              <ul className="list-unstyled">
                {doctors.map((doctor) => (
                  <li key={doctor.id}>{doctor.name}{doctor.specialization}{doctor.degree}</li>
                ))}
              </ul>
              <Button variant="info" className="mt-3">View All Doctors</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="success">Book Appointment</Button>
                <Button variant="secondary">View Medical Records</Button>
                <Button variant="dark">Update Profile</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Health Tips</Card.Title>
              <p>Here are some health tips or educational content...</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Home
