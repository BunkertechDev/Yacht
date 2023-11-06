import React from 'react';
import styles from './styles.module.css'; // Import your CSS styles

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="my-4 flex justify-center">
      {pageNumbers.map((page) => {
        console.log('page:', page);
        console.log('currentPage:', currentPage);
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`mx-2 p-2 rounded ${
              page === currentPage ? styles['pagination-button active'] : styles['pagination-button']
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
