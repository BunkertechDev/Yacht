import React from 'react';
import styles from './styles.module.css';

const TopHeader = ({ totalYachts }) => {
  return (
    <div className={styles.header}>
      <div className={styles.results}>Results: {totalYachts} yachts</div>
      <div className={styles.searchFilter}>
        <img src="hourglass-icon.png" alt="Hourglass Icon" />
        <span>Sort</span>
      </div>
    </div>
  );
};

export default TopHeader;
