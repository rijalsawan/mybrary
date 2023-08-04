import React, { useEffect, useState } from "react";

const Watchlist = () => {
  const [id, setId] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const movies = [];

  useEffect(() => {
    getId();
    pushMovies();
  }, []);

  async function pushMovies() {
    for (const _id of id) {
      const movie = await getMovies(_id.id);
      movies.push(movie.results);
    }
    setMoviesData(movies);
    console.log(moviesData);
  }

  const getId = async () => {
    try {
      const response = await fetch("/api/getMovies");
      const data = await response.json();
      setId(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async (id) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${id}`;
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
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const key = () => {
    return Math.random(1, 100000);
  };

  return (
    <>
      <section className="text-white body-font">
        <h1 className="text-center text-2xl mb-20">Watchlist</h1>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {moviesData.map((item) => (
              <div
                key={key()}
                className="lg:w-1/6 md:w-1/2 m-4 p-2 w-full hover:bg-blue-500 hover:scale-110 cursor-pointer transition-all duration-100 rounded-xl ease-in-out"
              >
                <span className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="lg:object-cover w-2/4 m-auto h-40  lg:object-center lg:w-[40] lg:h-[40] lg:block"
                    src={item.primaryImage.url ?? ""}
                  />
                </span>
                <div className="mt-4">
                  <h3 className="text-white text-md tracking-widest mb-1">
                    {item.titleText.text}
                    <span className="text-sm">{item.releaseYear.Year}</span>
                  </h3>
                  <p className="mt-1">{item.titleType.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Watchlist;
