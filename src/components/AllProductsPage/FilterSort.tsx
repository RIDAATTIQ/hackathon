// src/components/FilterSort.tsx
import React from 'react';

const FilterSort = () => {
  return (
    <div className="px-6 py-4 border-t border-b">
      <div className="flex justify-between items-center">
        <button className="text-gray-600 hover:text-black flex items-center space-x-2">
          <span>Hide Filters</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7l10 10m0-10L7 17" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <label className="text-gray-700">Sort By</label>
          <select className="border border-gray-300 px-4 py-2 rounded-md">
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;