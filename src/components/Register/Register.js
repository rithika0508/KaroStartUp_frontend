import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "./Register.module.css";
const Register = (props) => {
  const search = useLocation().search;
  const re = new URLSearchParams(search).get("re");
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
  const [referralId, setReferralId] = useState("");
  const [error, setError] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/users/Register`,
        {
          firstName: firstname,
          lastName: lastname,
          phoneNumber,
          email,
          password,
          cityOfCollege,
          college,
          year,
          degree,
          stream,
          referral: re,
        }
      );
      localStorage.setItem("karostartupUser", JSON.stringify(data.data));
      console.log(data);
    } catch (error) {
      console.log("error", error.error, error.message);
      setError(error.message);
    }
    props.setVisibility(true);
  };

  return (
    <>
      {!props.visibility && (
        <div className={styles.register__background}>
          <Form className={styles.register__form} onSubmit={handleRegister}>
            <h2 className={styles.headingForAnimation}>Apply & Grow Now</h2>
            <Form.Group className="mb-3">
              <img src="/circle.png" alt="circle" className={styles.circle1} />
              <Form.Label>First name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: John"
                defaultValue={firstname}
                className={styles.register__formcontrol}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: Novak"
                defaultValue={lastname}
                className={styles.register__formcontrol}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                placeholder="eg: example@gmail.com"
                defaultValue={email}
                className={styles.register__formcontrol}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="Number"
                placeholder="eg: 1234567890"
                className={styles.register__formcontrol}
                defaultValue={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                defaultValue={password}
                className={styles.register__formcontrol}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                defaultValue={confirmPassword}
                className={styles.register__formcontrol}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>College Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: Srm Institute of Science and Technology"
                defaultValue={college}
                className={styles.register__formcontrol}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City Of College *</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: Chennai, Tamil Nadu"
                defaultValue={cityOfCollege}
                className={styles.register__formcontrol}
                onChange={(e) => setCityOfCollege(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stream *</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: CSE-Cyber Security"
                defaultValue={stream}
                className={styles.register__formcontrol}
                onChange={(e) => setStream(e.target.value)}
                required
              />
            </Form.Group>
            <img src="/circle.png" alt="circle" className={styles.circle2} />
            <Form.Select
              aria-label="Default select example"
              className={`mb-3 ${styles.register__formcontrol}`}
              onChange={(e) => setDegree(e.target.value)}
              required
            >
              <option>Choose your degree *</option>
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
              className={`mb-3 ${styles.register__formcontrol}`}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option>Select your study year *</option>
              <option value="1">1st year</option>
              <option value="2">2nd year</option>
              <option value="3">3rd year</option>
              <option value="4">4th year</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I agree to terms and conditions"
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default Register;
