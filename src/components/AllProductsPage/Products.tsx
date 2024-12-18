// src/components/ProductList.tsx
import React from 'react'
// src/pages/ProductsPage.tsx

import Header from '@/components/Header';
import FilterSort from "@/components/AllProductsPage/FilterSort"
import ProductList from"@/components/AllProductsPage/ProductList"
import Navbar from '../Navbar';


const ProductsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar/>
      <FilterSort />
      <ProductList />
      
    </div>
  );
};

export default ProductsPage;