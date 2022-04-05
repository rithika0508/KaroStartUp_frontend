import HomeImage from './About.png'
import styles from "./About.module.css";
function About() {
    return (  <>
    <div className={`container-fluid ${styles.main}`}>
        <div className="row d-flex justify-content-around align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-12">
                <img className={styles.AboutImg} src={HomeImage} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className={styles.AboutUl}>
                    <li className={styles.desc}>Make connections between your friends and the most fascinating internships and employment.</li>
                    <li className={styles.desc}>Through Online Trainings, you can assist your colleagues in learning in-demand skills.</li>
                    <li className={styles.desc}>Conduct seminars to assist your classmates in obtaining an internship.</li>
                    <li className={styles.desc}>Give yourself an edge in the job market.</li>
                    <li className={styles.desc}>Receive financial compensation.</li>
                </ul>
            </div>
            
        </div>
    </div>
    </>);
}

export default About;