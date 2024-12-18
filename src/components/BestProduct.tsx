import React from 'react';
import Image from 'next/image';
const Bestproduct = () => {
  return (
    <div className="text-black p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg">Best of Air Max</span>
        <img src={"/image/arrow.png"} alt="Arrow" className="w-8 h-8" />
      </div>
      <div className="flex  flex-row  items-center">
        <div className="flex flex-col items-center">
          <Image src={"/image/womens.png"} alt="Women's Shoes" className="w-[500] h-[500]" />
          <span className="ml-2">Women's Shoes</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/image/mens.png"} alt="Men's Shoes" className="w-[500] h-[500]" />
          <span className="ml-2">Men's Shoes</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={"/image/airmax.png"} alt="Nike Air Max 97 SE" className="w-[500] h-[500]" />
          <span className="ml-2">Nike Air Max 97 SE</span>
        </div>
      </div>
    </div>
  );
};

export default Bestproduct;
