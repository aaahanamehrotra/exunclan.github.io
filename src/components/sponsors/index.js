import React from 'react';

import Plaksha from './plaksha.png';
import WolframLogo from './wolfram.png';
import DevfolioLogo from './devfolio.png';
// import AthenaLogo from './athena.png';
import AOPSLogo from './aops.png';
import WwcDelhiLogo from './wwc.jpeg';
import TaskadeLogo from './taskade.png';
import Balsamiq from './balsamiq.png';
import Rosenfield from './rosenfield.png';
import Replit from './replit.png';
import styles from './sponsor.module.css';
import Cake from './interview-cake.svg';
import Codechef from './codechef.svg';
import StreamYard from './streamyard.png';
import Ndss from './ndss.png';
import Athena from './athena.png';
import DigitalIndia from './Digital_India_logo.png';

export default () => (
  <>
    <div
      style={{
        margin: '3em 0',
      }}
    >
      {/* above community starts */}
      <div className={styles.aboveCommunity}>
        <a
          href="https://www.digitalindia.gov.in/"
          target="_blank"
          rel="nofollow"
        >
          <img
            alt="Digital India"
            src={DigitalIndia}
            className={styles.logoStyles}
          />
        </a>
        <a
          href="https://www.athenaeducation.co.in/"
          target="_blank"
          rel="nofollow"
        >
          <img alt="Code chef" src={Athena} className={{ width: '20rem' }} />
          <p style={{ textAlign: 'center' }}>Powered by Athena</p>
        </a>
        <a href="https://plaksha.edu.in/" target="_blank" rel="nofollow">
          <img alt="Plaksha" src={Plaksha} className={styles.logoStyles} />
        </a>
        <a href="https://www.codechef.com/" target="_blank" rel="nofollow">
          <img alt="Code chef" src={Codechef} className={styles.logoStyles} />
        </a>
      </div>
      {/* above community ends */}
      {/* below community starts */}

      <div
        style={{
          fontSize: '30px',
          marginBottom: '30px',
          textAlign: 'center',
          marginTop: '30px',
        }}
      >
        Community Partners
      </div>

      <div className={styles.belowcommunity}>
        <a href="https://balsamiq.com/" target="_blank" rel="nofollow">
          <img alt="balsamiq" src={Balsamiq} className={styles.belowimg} />
        </a>
        <a href="http://rosenfeldmedia.com/" target="_blank" rel="nofollow">
          <img alt="rosenfield" src={Rosenfield} className={styles.belowimg} />
        </a>
        <a href="https://replit.com/" target="_blank" rel="nofollow">
          <img alt="replit" src={Replit} className={styles.belowimg} />
        </a>

        <a
          href="https://www.wolfram.com/language/"
          target="_blank"
          rel="nofollow"
        >
          <img alt="Wolfram" src={WolframLogo} className={styles.belowimg} />
        </a>
        <a
          href="https://artofproblemsolving.com/"
          target="_blank"
          rel="nofollow"
        >
          <img alt="AOPS" src={AOPSLogo} className={styles.belowimg} />
        </a>
        <a href="https://taskade.com/" target="_blank" rel="nofollow">
          <img alt="Taskade" src={TaskadeLogo} className={styles.belowimg} />
        </a>
        <a href="https://www.interviewcake.com/" target="_blank" rel="nofollow">
          <img alt="Interview Cake" src={Cake} className={styles.belowimg} />
        </a>
        <a href="https://streamyard.com/" target="_blank" rel="nofollow">
          <img alt="Stream Yard" src={StreamYard} className={styles.belowimg} />
        </a>
        <a href="https://newdelhi.nss.org/" target="_blank" rel="nofollow">
          <img alt="ndss" src={Ndss} className={styles.belowimg} />
        </a>
      </div>
    </div>
  </>
);
