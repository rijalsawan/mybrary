import React from "react";
import { ImBooks } from "react-icons/im";
import Link from "next/link";
import { FaSearch, FaBook } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import {BsFillBookmarkCheckFill} from "react-icons/bs";


const Navbar = () => {
  return (
    <>
      <header className="text-white body-font my-10 shadow-lg pb-4">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link legacyBehavior href={"/"}><a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
            <ImBooks className="text-4xl text-red-300" />
            <span className="ml-3 text-3xl">Mybrary</span>
          </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className="lg:flex lg:space-x-8">
              <li>
                <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link  legacyBehavior href={"/searchBooks"}><a className="text-xl"><FaSearch className="searchIcon mx-3 mb-1"/>Search Books</a></Link></div>
              </li>
              <li>
              <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link legacyBehavior href={"/searchMovies"}><a className=" hover:text-white text-xl"><FaSearch className="searchIcon mx-3 mb-1"/>Search Movies</a></Link></div>
              </li>
              <li>
              <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link legacyBehavior href={"/MyBooks"}><a className=" hover:text-white text-xl"><FaBook className="bookIcon mx-3 mb-1"/>My Books</a></Link></div>
              </li>
              <li>
              <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link legacyBehavior href={"/watchlist"}><a className=" hover:text-white text-xl"><BsFillBookmarkCheckFill className="bookIcon mx-3 mb-1"/>Watchlist </a></Link></div>
              </li>
              <li>
             <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"> <Link legacyBehavior href={"/feedback"}><a className=" hover:text-white text-xl"><RiFeedbackFill className="feedbackIcon text-2xl mx-3 mb-1"/>Feedback</a></Link></div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
