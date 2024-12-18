// src/components/ProductList.tsx
import React from 'react';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-6">
      <div className="product-card bg-white shadow-md p-4 rounded-lg">
        <img src="/path/to/product1.jpg" alt="Nike Air Force 1" className="w-full h-60 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold mt-4">Nike Air Force 1</h3>
        <p className="text-gray-600 mt-2">₹10,795</p>
      </div>
      {/* Repeat Product Cards as needed */}
    </div>
  );
};

export default ProductList;