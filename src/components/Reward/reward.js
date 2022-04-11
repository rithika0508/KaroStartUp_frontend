import styles from "./reward.module.css";
import bgimage from "./plain-blue-01.jpg";
import certi from "./certi.jpg";
import discount from "./discount.jpg";
import intern from "./intern.jpg";
import vdo from "./vdo.jpeg";

const Reward = () => {
  return (
    <div className={styles.rewards__main}>
      <h3 style={{ textAlign: "center", color: "rgba(252,76,60,1)",fontSize:"48px" }}>
        Rewards
      </h3>
      <div className={styles.wrap}>
        <div className={styles.move} style={{ marginLeft: "0px" }}>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={intern}
                alt="Internship Opportunities"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>Internship Opportunities</div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={discount}
                alt="Discount Coupons"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>Discount Coupons</div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={certi}
                alt="Letter of Recommendation"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>
              Certificates/Letter of Recommendation
            </div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img src={vdo} alt="Video Courses" className={styles.image}></img>
            </div>
            <div className={styles.info}>Video Courses</div>
          </a>

          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={intern}
                alt="Internship Opportunities"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>Internship Opportunities</div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={discount}
                alt="Discount Coupons"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>Discount Coupons</div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img
                src={certi}
                alt="Letter of Recommendation"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.info}>
              Certificates/Letter of Recommendation
            </div>
          </a>
          <a href="http://google.com" rel="noopener" className={styles.card}>
            <div className={styles.car}>
              <img src={vdo} alt="Video Courses" className={styles.image}></img>
            </div>
            <div className={styles.info}>Video Courses</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reward;
