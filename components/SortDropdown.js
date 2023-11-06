import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    onSortChange(selectedSortOption);
  };

  return (
    <div className="sort-dropdown" style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <select onChange={handleSortChange}>
        <option value="priceAsc">Sort: Lowest Price</option>
        <option value="priceDesc">Sort: Highest Price</option>
        {/* Add more sorting options as needed */}
      </select>
    </div>
  );
};

export default SortDropdown;
