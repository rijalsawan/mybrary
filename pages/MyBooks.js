import Link from "next/link";
import React from "react";

const MyBooks = () => {
  return (
    <>
      <section className="text-white body-font">
        <h1 className="text-center text-2xl mb-20">My Books</h1>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div
              
              className="lg:w-1/6 md:w-1/2 m-4 p-2 w-full hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-100 rounded-xl ease-in-out"
            >
              <span className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="lg:object-cover w-2/4 m-auto h-40  lg:object-center lg:w-[40] lg:h-[40] lg:block"
                  src=""
                />
              </span>
              <div className="mt-4">
                
                  <h3 className="text-white text-md tracking-widest mb-1">
                    {} <span className="text-sm">()</span>
                  </h3>
             
                <h2 className="text-white title-font text-md font-medium">
                  Author: {}
                </h2>
                <p className="mt-1">Pages: {}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBooks;
