import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { message } from "antd";
import "../css/RegistrationForm.css";
import img from "../images/img3.png";

const Registration = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/users/registration";
    axios.post(api, input).then((res) => {
      message.success(res.data.msg);
    });
  };

  return (
    <div className="page-wrapper">
      <div className="register-card">

        {/* Left Image */}
        <div className="card-image">
          <img src={img} alt="Register" />
        </div>

        {/* Right Form */}
        <div className="card-form">
          <h3>User Registration</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name || ""}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={input.mobile || ""}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={input.password || ""}
                onChange={handleInput}
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </div>

      </div>
    </div>
  );
};

export default Registration;
