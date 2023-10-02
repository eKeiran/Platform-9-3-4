import styles from "./crowd.module.css";
import './globals.css'
const Crowd = () => {
  return (
    <div className={styles.crowd}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.crimeAndViolence}>Crime and Violence</div>
          <div className={styles.accidents}>Accidents</div>
          <div className={styles.reportsAndAlerts}>Reports and Alerts</div>
          <div className={styles.frameInner} />
          <div className={styles.crowdAnalysis}>Crowd Analysis</div>
          <div className={styles.understandingHowPeople}>
            Understanding how people move within a space, identifying congested
            areas, and optimizing traffic flow for improved efficiency and
            safety.
          </div>
        </div>
      </div>
      <div className={styles.frame2}>
        <img className={styles.groupIcon} alt="" src="/group-15.svg" />
        <div className={styles.rectangleDiv} />
        <b className={styles.crowdAnalysis1}>Crowd Analysis</b>
        <div className={styles.loniStationPune}>Pune Station</div>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.realTimeAnalysis}>Real Time Analysis</div>
        <div className={styles.weeklyReport}>Weekly Report</div>
        <div className={styles.todaysReport}>Today’s Report</div>
        <div className={styles.livePhotos}>Live Photos</div>
        <div className={styles.changePlatformParent}>
          <div className={styles.changePlatform}>Change Platform</div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/Vector 3.png"
          />
        </div>
        <img className={styles.image4Icon} alt="" src="/image 4.png" />
        <img className={styles.image7Icon} alt="" src="/image 7.png" />
        <img className={styles.image5Icon} alt="" src="/image 5.png" />
        <img className={styles.image6Icon} alt="" src="/image 6.png" />
        <div className={styles.todayParent}>
          <div className={styles.today}>Today</div>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group1@2x.png"
          />
        </div>
        <div className={styles.frameChild4} />
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
        <div className={styles.frameChild7} />
        <div className={styles.frameChild8} />
        <div className={styles.timeCrowded}>{`Time crowded `}</div>
        <div className={styles.timeLessCrowded}>Time less crowded</div>
        <div className={styles.timeClose}>{`Time close `}</div>
        <div className={styles.timeOpen}>{`Time open `}</div>
        <div className={styles.emergencies}>{`Emergencies `}</div>
        <div className={styles.ellipseDiv} />
        <div className={styles.groupParent}>
          <img className={styles.frameChild9} alt="" src="/Group 18251.png" />
          <div className={styles.div}>38%</div>
        </div>
        <div className={styles.amMostContainer}>
          <span className={styles.amMostContainer1}>
            <b>{`10am `}</b>
            <span>- Most Crowdy</span>
          </span>
        </div>
        <div className={styles.nowModeratelyContainer}>
          <span className={styles.amMostContainer1}>
            <b>{`Now `}</b>
            <span>- Moderately Crowded</span>
          </span>
        </div>
        <div className={styles.amLeastContainer}>
          <span className={styles.amMostContainer1}>
            <b>{`2am `}</b>
            <span>- Least Crowdy</span>
          </span>
        </div>
        <div className={styles.amRushContainer}>
          <span className={styles.amMostContainer1}>
            <b>{`7am `}</b>
            <span>- Rush hour</span>
          </span>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frame3}>
            <div className={styles.am}>10am</div>
            <div className={styles.am}>5pm</div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.am1}>11am</div>
            <div className={styles.am2}>12am</div>
            <div className={styles.pm1}>1pm</div>
            <div className={styles.pm2}>2pm</div>
            <div className={styles.pm3}>3pm</div>
            <div className={styles.pm4}>4pm</div>
            <div className={styles.pm5}>6pm</div>
            <div className={styles.pm6}>7pm</div>
            <div className={styles.lineDiv} />
            <div className={styles.frameChild10} />
            <div className={styles.frameChild11} />
            <div className={styles.frameGroup}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild12} />
                <div className={styles.frame5}>
                  <div className={styles.frameChild13} />
                </div>
                <div className={styles.frame6}>
                  <div className={styles.frameChild14} />
                </div>
                <div className={styles.frame7}>
                  <div className={styles.frameChild15} />
                </div>
                <div className={styles.frame5}>
                  <div className={styles.frameChild16} />
                </div>
                <div className={styles.frame5}>
                  <div className={styles.frameChild17} />
                </div>
                <div className={styles.frame10}>
                  <div className={styles.frameChild18} />
                </div>
                <div className={styles.frameChild19} />
                <div className={styles.frame6}>
                  <div className={styles.frameChild20} />
                </div>
                <div className={styles.frame12}>
                  <div className={styles.frameChild21} />
                </div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/Vector 3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowd;
