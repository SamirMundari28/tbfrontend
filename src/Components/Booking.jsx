import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Booking= ({ bookedSeats, busName, timing }) => {
  const [passengerDetails, setPassengerDetails] = React.useState(
    Array(bookedSeats).fill({ name: '', gender: '', age: '' })
  );

  const handleAddPassenger = () => {
    setPassengerDetails([...passengerDetails, { name: '', gender: '', age: '' }]);
  };

  const handleRemovePassenger = (index) => {
    const newPassengerDetails = [...passengerDetails];
    newPassengerDetails.splice(index, 1);
    setPassengerDetails(newPassengerDetails);
  };

  const handlePassengerChange = (e, index) => {
    const { name, value } = e.target;
    const newPassengerDetails = [...passengerDetails];
    newPassengerDetails[index][name] = value;
    setPassengerDetails(newPassengerDetails);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center mb-4">{busName} - {timing}</h1>
          {passengerDetails.map((passenger, index) => (
            <div key={index}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(e, index)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={passenger.gender}
                  onChange={(e) => handlePassengerChange(e, index)}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  value={passenger.age}
                  onChange={(e) => handlePassengerChange(e, index)}
                />
              </Form.Group>
              <Button variant="danger" onClick={() => handleRemovePassenger(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button variant="primary" onClick={handleAddPassenger}>
            Add Passenger
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;