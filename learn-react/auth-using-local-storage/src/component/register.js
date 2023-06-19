import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    phone: "",
    state: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const updateDetails = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h6 className="text-error h6">
          Password and ConfirmPassword should be matched!
        </h6>
      </div>
    );
  };

  const createAccount = (event) => {
    event.preventDefault();
    if (
      input.password.length === 8 &&
      input.confirmPassword.length === 8 &&
      input.password !== input.confirmPassword
    ) {
      setError(true);
    } else {
      setError(false);
      localStorage.setItem("userDetails", JSON.stringify(input));
      console.log("account was created");
      navigate("/login");
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-warning"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <nav className="navContainer">
                    <img src="./company-logo.png" alt="company logo" />
                    <h2>Foodie</h2>
                  </nav>

                  <div className="mb-3">
                    <Form onSubmit={createAccount}>
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
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          minLength={8}
                          value={input.password}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formConfirmPassword"
                      >
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          minLength={8}
                          value={input.confirmPassword}
                          onChange={updateDetails}
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
                        {errorMessage()}
                        <Button variant="warning" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{" "}
                        <a href={"/login"} className="text-info fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
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
