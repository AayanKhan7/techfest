import React, { useState, useEffect } from 'react';
import styles from './CountdownPage.module.css';

const CountdownPage = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2026-01-30T00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.mainContentWrapper}>

        <div className={styles.topPanel}>
          <div className={styles.borderNeonCyanGradient}></div>

          <div className={styles.topPanelInnerContent}>
            <div className={styles.planetIcon}></div>

            <div className={styles.centerSection}>
              <div className={styles.eventBeginsText}>EVENT BEGINS IN</div>
              <div className={styles.countdownTimerDisplay}>
                <span className={styles.countdownNumber}>{formatTime(timeLeft.days)}D</span>
                <span className={styles.countdownDivider}>:</span>
                <span className={styles.countdownNumber}>{formatTime(timeLeft.hours)}H</span>
                <span className={styles.countdownDivider}>:</span>
                <span className={styles.countdownNumber}>{formatTime(timeLeft.minutes)}M</span>
                <span className={styles.countdownDivider}>:</span>
                <span className={styles.countdownNumber}>{formatTime(timeLeft.seconds)}S</span>
              </div>
            </div>

            {/* SWORD — already correct */}
            <div className={styles.swordIconContainer}>
              <div className={styles.swordElement}></div>
            </div>
          </div>
        </div>

        <div className={styles.rodsContainer}>
          <div className={styles.rod}></div>
          <div className={styles.rod}></div>
        </div>

        <div className={styles.bottomCard}>
          <div className={styles.borderNeonCyanGradient}></div>
          <div className={styles.bottomCardInnerContent}>
            <div className={styles.gravityEventText}>GRAVITY EVENT</div>
            <div className={styles.dateNumbers}>
              <span>30</span>
              <span className={styles.dateSeparator}>–</span>
              <span>31</span>
            </div>
            <div className={styles.dateTextColumns}>
              <div className={styles.dateColumn}>
                <span>JAN</span>
                <span>2026</span>
              </div>
              <div className={styles.dateColumn}>
                <span>JAN</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CountdownPage;
