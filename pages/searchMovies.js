import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiSolidBookmarkHeart } from "react-icons/bi";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const movies = () => {
  const [form, setForm] = useState({});
  const [moviesData, setMoviesData] = useState([]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${form.title}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c1463f3b44msh69f2ba005b9bb8bp1ecf21jsn2d3cc5d14a4b",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.results.length ===0) {
        toast.error("No results found. Try again!");
      }
      setMoviesData(result.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(moviesData);

  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
      <form action="">
        <h1 className="text-center text-xl my-10 text-white">
          Search The Title Of Any Movie You Like
        </h1>
        <div className="flex justify-center space-x-3">
          <input
            className="text-black w-1/4 h-10 p-4 rounded-xl"
            type="text"
            onChange={handleChange}
            value={form.title ? form.title : ""}
            name="title"
            id="title"
            placeholder=" Title of the Movie"
          />
          <button
            className="bg-gradient-to-t from-red-300 to-blue-300 p-2 hover:scale-110 transition-all rounded-lg text-black"
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
            {moviesData.length ===0 ? <><h1 className="mx-auto text-xl my-10">Search to Get results below:</h1></> : moviesData.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="lg:w-1/6 md:w-1/2 m-4 p-2 w-full hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-100 rounded-xl ease-in-out"
                  >
                    <span className="block relative rounded overflow-hidden">
                      <BiSolidBookmarkHeart className="text-red-500 bg-white rounded-full text-3xl hover:text-red-700"/>
                      <img
                        height={200}
                        width={200}
                        alt="ecommerce"
                        className="lg:object-cover w-2/4 m-auto h-40  lg:object-center lg:w-[40] lg:h-[40] lg:block"
                        src={(item.primaryImage === null) ? "https://via.placeholder.com/150" : item.primaryImage.url}
                      />
                    </span>
                    <div className="mt-4">
                      <h3 className=" text-lg text-blue-300 tracking-widest mb-1">
                        {item.titleText.text} <span className="text-sm">({item.titleType.text})</span>
                      </h3>
                      <p className="mt-1">{item.releaseYear.year}</p>
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
};

export default movies;
