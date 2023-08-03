import React from "react";
import { useState } from "react";
import Image from "next/image";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBooks() {
  const [form, setForm] = useState({});
  const [booksData, setBooksData] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://hapi-books.p.rapidapi.com/search/${form.title}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c1463f3b44msh69f2ba005b9bb8bp1ecf21jsn2d3cc5d14a4b",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.length === 0) {
        toast.error("No results found");
      }
      setBooksData(result);
    } catch (error) {
      console.error(error);
    }

    console.log(booksData);
  };
  return (
    <>
    <ToastContainer/>
      <form action="">
        
        <div className="flex justify-center space-x-3">
          <input
            className="text-black w-1/4 h-10 p-4 rounded-xl transition-all ease-in-out duration-500"
            type="text"
            onChange={handleChange}
            value={form.title ? form.title : ""}
            name="title"
            id="title"
            placeholder=" Title of the Book"
          />
          <button
            className="bg-gradient-to-t  hover:scale-110 transition-all from-red-300 to-blue-300 p-2 rounded-lg text-black"
            onClick={handleSubmit}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <section className="text-white body-font my-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {booksData.map((item) => {
              return (
                <>
                  <div
                    key={item._id}
                    className="lg:w-1/6 md:w-1/2 m-4 p-2 w-full hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-100 rounded-xl ease-in-out"
                  >
                    <span className="block relative rounded overflow-hidden">
                    <BiSolidBookmarkHeart onClick={()=>{
                      let data = {
                        id: item.book_id,
                      }
                      let a = fetch('/api/addBook', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                      })
                      .then(response => response.json())
                      .then(data => {
                        toast.success("Book added to your list")
                        console.log('Success:', data);
                      })
                      .catch((error) => {
                        toast.error("Book already exists in your list")
                        console.error('Error:', error);
                      })
                    }} className="text-red-500 bg-white rounded-full text-3xl hover:text-red-700"/>

                      <img
                        height={200}
                        width={200}
                        alt="ecommerce"
                        className="lg:object-cover w-2/4 m-auto h-40  lg:object-center lg:w-[40] lg:h-[40] lg:block"
                        src={item.cover}
                      />
                    </span>
                    <div className="mt-4">
                      <h3 className=" text-lg text-blue-300 tracking-widest mb-1">
                        {item.name} <span className="text-sm">({item.year})</span>
                      </h3>
                      <p className="mt-1">{item.authors}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
