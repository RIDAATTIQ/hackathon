import React from 'react';
import Essentials from '@/components/Essentials';
import Layout from './layout';
import BestProduct from '@/components/BestProduct';
import Featured from '@/components/Featured';
import Gearup from '@/components/Gearup';
import ThirdBar from '@/components/Thirdbar';
import Shop from '@/components/Shop';
import Products from '@/components/AllProductsPage/Products'; // Add your new component here
import Head from 'next/head';

import ProductDetail from '@/components/Productdetail';
import CardPage  from '@/components/CardPage/Card';
import LoginForm from '@/components/LoginForm/Form';


const Homepage = () => {
  return (
    <>
      <Head>
        <title>Homepage - My Website</title>
      </Head>
      <Layout>
        <main>
          {/* First Cover Page */}
          <h1 className='bg-black text-white'>Welcome to homepage</h1>
          <ThirdBar />
          <ProductDetail/>
          <BestProduct />
          <Featured />
          <Gearup />
          <Shop />
          <Essentials />

          {/* Second Cover Page */}
          <section className='mt-8'>
            <h2 className='text-center text -white bg-black text-2xl font-semibold mb-4'>All Products</h2>
            <Products /> {/* Adding the Products component */}
          </section>
          



          <CardPage /> 

          
          <LoginForm/>
          
        </main>
      </Layout>
    </>
  );
};

export default Homepage;