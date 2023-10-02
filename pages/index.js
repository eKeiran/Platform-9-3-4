import { Button } from "@mui/material";
import styles from "./index.module.css";
import Link from 'next/link';
import './globals.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.homeChild} alt="" src="/group-15.svg" />
      <h1 className={styles.platform9}>Platform 9¾</h1>
      <h3 className={styles.cultivatingSafetyThrough}>
        Cultivating safety through innovation.
      </h3>
      <button className={styles.rectangleParent}  href="/page2">
        <img className={styles.frameChild} alt="" src="/rectangle-18@2x.png" />
        <div className={styles.frameItem} />
        <Link href="/page2">
        <div className={styles.crowdManagement}>Crowd Management</div>
        </Link>
      </button>
      <div className={styles.rectangleGroup}>
        <img className={styles.frameInner} alt="" src="/rectangle-19@2x.png" />
        <div className={styles.rectangleDiv} />
        <div className={styles.crimeAndViolenceContainer}>
          <p className={styles.crime}>Crime</p>
          <p className={styles.crime}>and</p>
          <p className={styles.crime}>Violence</p>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-20@2x.png"
        />
        <div className={styles.frameChild1} />
        <div className={styles.accidents}>Accidents</div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.frameChild2} alt="" src="/rectangle-21@2x.png" />
        <div className={styles.frameChild3} />
        <div className={styles.reportsAndAlertsContainer}>
          <p className={styles.crime}>Reports</p>
          <p className={styles.crime}>and</p>
          <p className={styles.crime}>Alerts</p>
        </div>
      </div>
      <button className={styles.chooseYourPlatformParent}>
        <Button
          className={styles.chooseYourPlatform}
          sx={{ width: 335 }}
          color="primary"
          variant="text"
          style={{ color: 'white', fontSize: '35px' }} 
        >
          Choose your Platform
        </Button>
        <img className={styles.groupIcon} alt="" src="/group-13@2x.png" />
      </button>
    </div>
  );
};

export default Home;
