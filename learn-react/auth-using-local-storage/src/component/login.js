import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const updateDetails = (event) => {
    setError(false);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (
      userDetails.email === input.email &&
      userDetails.password === input.password
    ) {
      setError(false);
      localStorage.setItem("loggedIn", true);
      console.log("Successfully logged-in");
      navigate("/");
    } else {
      setError(true);
    }
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
          Invalid Username and or Password. Please try again!
        </h6>
      </div>
    );
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
                    <Form>
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

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={input.password}
                          onChange={updateDetails}
                          required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        {errorMessage()}
                        <Button
                          variant="warning"
                          type="button"
                          onClick={handleLogin}
                        >
                          Log In
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href={"/register"} className="text-info fw-bold">
                          Register
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
