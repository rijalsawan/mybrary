import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("myuser")) {
      router.push("/");
    }
  }, [router]);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const data = {
      email,
      password,
    };
    let res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = res;
    if (response.status == 200) {
      setEmail("");
      setPassword("");
      let { token, email } = await response.json();
      localStorage.setItem("myuser", JSON.stringify({token: token, email: email}));
      toast.success("Logged in Succesfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } 
    if (response.status == 400) {
      res.json().then((data) => {
        toast.error(data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-[280px] py-5 mx-auto">
        <div className="flex flex-col items-center mt-[10vh] bg-blue-400 p-5 rounded-xl shadow">
          <h1 className="text-3xl font-bold text-white mb-5">Login</h1>
          <form action="">
            <input
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              id="email"
              className="w-full px-6 py-3 mb-6 text-black  rounded-lg font-medium "
              placeholder="Email"
            />
            <input
              type="password"
              onChange={handleChange}
              value={password}
              name="password"
              id="password"
              className="w-full px-6 py-3 mb-6 text-black rounded-lg font-medium "
              placeholder="••••••••"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-white mt-3 text-[14px]">
            Don't have an account? &nbsp;
            <Link href="/signup" className="cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default login;
