import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function EditProfile() {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [input, setInput] = useState({
    name: userDetails.name,
    phone: userDetails.phone,
    state: userDetails.state,
    email: userDetails.email,
    address: userDetails.address,
    password: userDetails.password,
    confirmPassword: userDetails.confirmPassword,
  });

  const updateDetails = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const updateProfileDetails = (event) => {
    localStorage.setItem("userDetails", JSON.stringify(input));
    console.log("updated data --> ", input);
    navigate("/");
  };

  return (
    <div>
      <Container>
        <br />
        <Row className="vh-100 d-flex justify-content-center align-items-top">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <nav className="navContainer">
                    <h2>Update User Profile</h2>
                  </nav>
                  <br />
                  <div className="mb-3">
                    <Form onSubmit={updateProfileDetails}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          First Name:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          minLength={3}
                          value={input.name}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address:
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={input.email}
                          onChange={updateDetails}
                          disabled={true}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Phone">
                        <Form.Label className="text-center">Phone:</Form.Label>
                        <Form.Control
                          type="number"
                          name="phone"
                          placeholder="Enter Phone Number"
                          minLength={5}
                          maxLength={10}
                          value={input.phone}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Address">
                        <Form.Label className="text-center">
                          Address:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          placeholder="Enter Address"
                          minLength={10}
                          value={input.address}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="State">
                        <Form.Label className="text-center">State:</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          placeholder="Enter State"
                          minLength={5}
                          value={input.state}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="warning" type="submit">
                          Update Profile
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
