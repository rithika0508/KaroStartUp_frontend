import React from "react";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./Levels.module.css";
const Level = () => {
  const [name, setName] = useState("rithika");
  const [lvl, setLvl] = useState(0);
  const [levelVisibility, setLevelVisibility] = useState(false);
  const [referenceUrl, setReferneceUrl] = useState("google.com");
  const [copyVisibility, setCopyVisibility] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("karostartupUser")) {
      setLevelVisibility(true);
    }
  }, [levelVisibility]);
  const copyToClipBoard = () => {
    setCopyVisibility(true);
    setTimeout(() => {
      setCopyVisibility(false);
    }, 2000);
  };

  return (
    <>
      {levelVisibility && (
        <div className={styles.main}>
          <img src="/circle.png" alt="circle" className={styles.circle1} />
          <div className={styles.levels__main}>
            <div className={styles.intro}>
              <h5>Hey there👋 {name}!</h5>
              <h6>Welcome to karostartup campus ambassador program...</h6>
            </div>
            <div className={styles.levelpage}>
              <div className={styles.level}>
                <img
                  src="/bronze-medal.png"
                  alt="third"
                  className={styles.medalImage}
                />
                <h4>Bronze Medal</h4>
                <div className={styles.level__text}>
                  Get Free discount vouchers for our classroom courses and learn
                  more..
                </div>
              </div>
              <div className={styles.level}>
                <img
                  src="/second-prize.png"
                  alt="second"
                  className={styles.medalImage}
                />
                <h4>Silver Medal</h4>
                <div className={styles.level__text}>
                  Grab your opportunity to get yours hands on lor and
                  certificate of completion..
                </div>
              </div>
              <div className={styles.level}>
                <img
                  src="/medal.png"
                  alt="first"
                  className={styles.medalImage}
                />
                <h4>Gold Medal</h4>
                <div className={styles.level__text}>
                  Win Exciting Rewards, internships, free courses and many
                  more...
                </div>
              </div>
            </div>
            <div className={styles.referralText}>
              Share the referral to your friends and family and grab chance to
              win karostartup classroom courses and many more..
            </div>
            <div className={styles.copy}>
              <span className={styles.url}>{referenceUrl}</span>
              <CopyToClipboard
                text={referenceUrl}
                onCopy={() => copyToClipBoard()}
              >
                {copyVisibility ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className={`bi bi-check2 ${styles.icons}`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className={`bi bi-clipboard-fill ${styles.icons}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"
                    />
                  </svg>
                )}
              </CopyToClipboard>
            </div>
            <br></br>
            <div className={styles.footer}>
              <h6>Connect with us:</h6>
              <div className={styles.connect}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class={`bi bi-instagram ${styles.connectlogo}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                instagram/karostartup
              </div>
              <div className={styles.connect}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class={`bi bi-linkedin ${styles.connectlogo}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <div>linkedIn/karostartup</div>
              </div>
              <div className={styles.connect}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class={`bi bi-facebook ${styles.connectlogo}`}
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                facebook/karostartup
              </div>
            </div>
          </div>
          <img src="/circle.png" alt="circle" className={styles.circle2} />
        </div>
      )}
    </>
  );
};
export default Level;
