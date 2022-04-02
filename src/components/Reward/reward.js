import styles from "./reward.module.css";
import bgimage from './plain-blue-01.jpg';
import wallpaper from './wallpaper.jpg';

const Reward = () => {

  return (<>
    <div className={styles.hea}>Heading</div>


    <div className={styles.wrap}>


      <div className={styles.move} style={{ marginLeft: "0px" }}>

        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Internship Opportunities" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Discount Coupons" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Letter of Recommendation" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Video Courses" className={styles.image}></img>
          </div>
        </a>


        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Internship Opportunities" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Discount Coupons" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Letter of Recommendation" className={styles.image}></img>
          </div>
        </a>
        <a href="http://google.com"  rel="noopener">
          <div className={styles.car}>
            <img src={wallpaper} alt="Video Courses" className={styles.image}></img>
          </div>
        </a>

      </div>
    </div>

  </>);
}

export default Reward;