import React from 'react';
import styles from './styles.module.css';

const TopHeader = ({ totalYachts }) => {
  return (
    <div className={styles.header}>
      <div className={styles.results}>Results: {totalYachts} yachts</div>
      <div className={styles.searchFilter}>
        
      </div>
    </div>
  );
};

export default TopHeader;
