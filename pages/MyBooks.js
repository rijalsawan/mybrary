import Link from "next/link";
import React, { use } from "react";
import { useState, useEffect } from "react";

const MyBooks = () => {
  const [id, setId] = useState([]);
  const [booksData, setBooksData] = useState([]);

  const getId = async () => {
    try {
      const response = await fetch("/api/getBooks");
      const data = await response.json();
      setId(data);
    } catch (error) {
      console.error("Error fetching IDs:", error);
    }
  };

  useEffect(() => {
    getId();
  }, []);

  useEffect(() => {
    if (id.length > 0) {
      pushBooks();
    }
  }, [id]);

  async function pushBooks() {
    const books = [];
    for (const _id of id) {
      try {
        const book = await getBooks(_id.id);
        books.push(book);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    }
    setBooksData(books.flat()); // Flatten the array of arrays
  }

  const getBooks = async (id) => {
    const url = `https://hapi-books.p.rapidapi.com/book/${id}`
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c1463f3b44msh69f2ba005b9bb8bp1ecf21jsn2d3cc5d14a4b",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const key = () => {
    return Math.random(1, 100000);
  }


  console.log(booksData);
  return (
    <>
      <section className="text-white body-font">
        <h1 className="text-center text-2xl mb-20">My Books</h1>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/6 md:w-1/2 m-4 p-2 w-full hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-100 rounded-xl ease-in-out">
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
