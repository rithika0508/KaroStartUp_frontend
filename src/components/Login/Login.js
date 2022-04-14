import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-modal/styles.css";
import styles from "./LoginModal.module.css";
import { Modal } from "react-responsive-modal";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, [props.visibility]);

  const lvlVisibility = () => {
    props.setVisibility(true);
  };
  const close = () => {
    props.onCloseModal();
    // props.setUser(true);
  };
  const submitHandler = async () => {
    // console.log("entered");
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      if (data) {
        localStorage.setItem("karostartupUser", JSON.stringify(data.data));
        localStorage.setItem("karostartupToken", JSON.stringify(data.token));
        // lvlVisibility();
        props.setVisibility(true);
        setError("");
        props.onCloseModal();
        // props.history.push("#register");
        console.log(data);
      }
    } catch (error) {
      // props.setVisibility(false);
      setError(error.message);
      console.log(error);
    }
  };
  const forgotPassword = async () => {
    // props.onCloseModal();
    // props.setForgotOpen(true);
  };
  return (
    <Modal
      open={props.open}
      onClose={props.onCloseModal}
      center
      showCloseIcon={false}
    >
      <div className={styles.root}>
        <div className={styles.head}>
          <p className={styles.headtext}>Log Into Your Account</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          {error ? (
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          ) : (
            ""
          )}
          <input
            value={email}
            className={styles.input}
            type="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            style={{ marginTop: "2rem" }}
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.part}>
            <div>
              <input
                type="checkbox"
                name="Login"
                value="Keep Me Logged In"
                style={{ marginRight: "8px" }}
                className={styles.checkbox}
              />
              <label htmlFor="Login">Keep me Logged In</label>
            </div>
            <div onClick={forgotPassword}>
              <p className={styles.forgot}>Forgot Password?</p>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className={styles.button}
            onClick={submitHandler}
          >
            Log In
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
