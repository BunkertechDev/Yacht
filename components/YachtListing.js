import React from 'react';
import styles from './styles.module.css';

const YachtListing = ({ data }) => {
  return (
    <div className={styles['yacht-listing']}>
      <img
        src={`https://picsum.photos/seed/picsum/200/300`}
        alt={data.yacht_name}
        loading="lazy"
      />
      <h3 className={styles['yacht-name']}>{data.yacht_name}</h3>
      <p className={styles['yacht-details']}>Manufacturer: {data.manufacturer}</p>
      <p className={styles['yacht-details']}>Year Built: {data.year_built}</p>
      <p className={styles['yacht-details']}>Length: {data.length}</p>
      <p className={styles['yacht-price']}>From ${data.price} /week</p>
    </div>
  );
};

export default YachtListing;
