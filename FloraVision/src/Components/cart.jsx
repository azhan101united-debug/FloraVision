import React from 'react';
import { cartDetails } from '../data/cartDetails';

export default function Cart() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-6 my-10">
      <h1 className="text-3xl text-white tracking-wide border-b-2 border-amber-500 pb-2">
        Our Trendy Plants
      </h1>
      
      <div className="w-full flex flex-col items-center gap-6 space-y-6">
        {cartDetails.map((plant, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div 
              key={plant.id} 
              className={`flex flex-col w-full max-w-4xl gap-16 border rounded-3xl overflow-visible shadow-sm transition-all duration-300 backdrop-blur-md 
                ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >

              <div className="w-full md:w-1/2 p-2  flex items-center justify-center  overflow-visible -mt-16 md:-mt-12 max-w-80">
                <img 
                  src={plant.plantURL}
                  alt={plant.id} 
                  className="w-full h-58 md:h-64 object-cover rounded-2xl" 
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h1 className="text-xl font-bold text-white">{plant.heading}</h1>
                <h2 className="text-xs text-white my-3 leading-relaxed">{plant.description}</h2>
                <h1 className="text-lg font-semibold text-white">Rs. {plant.price}/-</h1>
                
                <div className="flex items-center gap-4 mt-4">
                  <button className="border border-white text-white rounded-md p-1 px-4 text-sm font-medium hover:bg-gray-50 transition-colors">
                    Explore
                  </button>
                  <button className="border border-gray-300 text-white rounded-md p-1 px-3 text-sm hover:bg-gray-100 transition-colors">
                    tag
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
