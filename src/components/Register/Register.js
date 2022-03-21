import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Register.module.css";
const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cityOfCollege, setCityOfCollege] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const [stream, setStream] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Form className={styles.register__form} onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: John"
            defaultValue={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: Novak"
            defaultValue={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="eg: example@gmail.com"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="Number"
            placeholder="eg: 1234567890"
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            defaultValue={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>College Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: Srm Institute of Science and Technology"
            defaultValue={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>City Of College</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: Chennai, Tamil Nadu"
            defaultValue={cityOfCollege}
            onChange={(e) => setCityOfCollege(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stream</Form.Label>
          <Form.Control
            type="text"
            placeholder="eg: CSE-Cyber Security"
            defaultValue={stream}
            onChange={(e) => setStream(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          className={`mb-3`}
          onChange={(e) => setDegree(e.target.value)}
          required
        >
          <option>Choose your degree</option>
          <option value="btech">BTech</option>
          <option value="bba">BBA</option>
          <option value="bms">BMS</option>
          <option value="bsw">BSW</option>
          <option value="bem">BEM</option>
          <option value="bfd">BFD</option>
          <option value="bttm">BTTM</option>
          <option value="bsc">BSC</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          className={`mb-3`}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option>Select your study year</option>
          <option value="1">1st year</option>
          <option value="2">2nd year</option>
          <option value="3">3rd year</option>
          <option value="4">4th year</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to terms and conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
