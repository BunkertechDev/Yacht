import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import YachtListing from '../components/YachtListing';
import Pagination from '../components/Pagination';
import TopHeader from '../components/TopHeader';
import SortDropdown from '../components/SortDropdown';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState('');

  const fetchMoreData = () => {
    if (currentPage * itemsPerPage >= data.length) {
      setHasMore(false);
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    axios.get('/data/yacht_listings.csv').then((response) => {
      Papa.parse(response.data, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (result) => {
          setData(result.data);
        },
      });
    });
  }, []);

  useEffect(() => {
    if (sortBy) {
      const sortedData = [...data];
      if (sortBy === 'priceAsc') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'priceDesc') {
        sortedData.sort((a, b) => b.price - a.price);
      }
      setData(sortedData);
    }
  }, [sortBy, data]);

  const handleSearch = (searchTerm) => {
    // Implement the search functionality
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="search-dropdown">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="sort-dropdown">
          <SortDropdown onSortChange={setSortBy} />
        </div>
      </div>
      <TopHeader totalYachts={data.length} />
      <h1 className="text-2xl font-bold mb-4">Yacht Listings</h1>

      <InfiniteScroll
        dataLength={currentItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {currentItems.map((item, index) => (
          <YachtListing key={index} data={item} />
        ))}
      </InfiniteScroll>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default IndexPage;
