import React,{ useState } from "react";
import { Col, Row, Container, Card, Form } from "react-bootstrap";

export default function DisplayProfile() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const [input] = useState({
      name: userDetails.name,
      phone: userDetails.phone,
      state: userDetails.state,
      email: userDetails.email,
      address: userDetails.address,
      password: userDetails.password,
      confirmPassword: userDetails.confirmPassword,
    });

    return (
        <div>
      <Container>
        <br/>
        <Row className="vh-100 d-flex justify-content-center align-items-top">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <nav className="navContainer">
                    <h2>Display User Profile</h2>
                  </nav>
                  <br />
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center boldText">
                          First Name:
                        </Form.Label>
                        <Form.Label className="text-center">
                          {input.name}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center boldText">
                          Email address:
                        </Form.Label>
                        <Form.Label className="text-center">
                          {input.email}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Phone">
                        <Form.Label className="text-center boldText">
                            Phone:
                        </Form.Label>
                        <Form.Label className="text-center">
                            {input.phone}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Address">
                        <Form.Label className="text-center boldText">
                          Address:
                        </Form.Label>
                        <Form.Label className="text-center">
                          {input.address}
                        </Form.Label>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="State">
                        <Form.Label className="text-center boldText">
                            State:
                        </Form.Label>
                        <Form.Label className="text-center">
                            {input.state}
                        </Form.Label>
                      </Form.Group>
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