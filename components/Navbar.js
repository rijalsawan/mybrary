import React from "react";
import { ImBooks } from "react-icons/im";
import Link from "next/link";
import { FaSearch} from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import {BsFillBookmarkCheckFill} from "react-icons/bs";
import {BiLogIn} from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/router";
import {FaUserCircle} from 'react-icons/fa'


const Navbar = ({user, logout}) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  return (
    <>
      <header className="text-white body-font my-10 shadow-lg pb-4">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link legacyBehavior href={"/"}><a className="flex title-font font-medium cursor-pointer items-center text-white-900 mb-4 md:mb-0">
            <ImBooks className="text-4xl text-red-300" />
            <span className="ml-3 text-3xl my-3 lg:my-0">Mybrary</span>
          </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className="lg:flex lg:space-x-8">
              <li>
              <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link legacyBehavior href={"/searchMovies"}><a className=" hover:text-white text-xl"><FaSearch className="searchIcon mx-3 mb-1"/>Search Movies</a></Link></div>
              </li>
              <li>
              <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"><Link legacyBehavior href={"/watchlist"}><a className=" hover:text-white text-xl"><BsFillBookmarkCheckFill className="bookIcon mx-3 mb-1"/>Watchlist </a></Link></div>
              </li>
              <li>
             <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"> <Link legacyBehavior href={"/feedback"}><a className=" hover:text-white text-xl"><RiFeedbackFill className="feedbackIcon text-2xl mx-3 mb-1"/>Feedback</a></Link></div>
              </li>
              <li>
             <div className="flex justify-center">
              <span
                onMouseOver={() => {
                  setDropdown(true);
                }}
                onMouseLeave={() => {
                  setDropdown(false);
                }}
              >
             {dropdown && (
                  <div
                    onClick={() => {
                      setDropdown(true);
                    }}
                    onMouseOver={() => {
                      setDropdown(true);
                    }}
                    onMouseLeave={() => {
                      setDropdown(false);
                    }}
                    className="absolute shadow-lg right-48 w-40 top-20 p-3 rounded-lg bg-blue-300"
                  >
                    <ul>
                      <li
                        onClick={logout}
                        className="font-bold cursor-pointer py-1 hover:text-red-500"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
                <div className="flex space-x-3">
                {user.value && <FaUserCircle className="text-3xl cursor-pointer hover:scale-125 transition-transform duration-150 lg:my-1"/>} {user.value && <span className="text-xl lg:my-1 cursor-pointer">Hi! {user.email}</span>}</div>
              </span>
             {!user.value && <div className="hover:scale-110 transition-transform duration-150 hover:bg-blue-300 hover:bg-opacity-20 hover:rounded lg:px-[4px] lg:py-[5px] lg:pr-4"> <Link legacyBehavior href={"/login"}><a className=" hover:text-white text-xl"><BiLogIn className="feedbackIcon text-2xl mx-3 mb-1"/>Log in</a></Link></div>}
             
             </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
