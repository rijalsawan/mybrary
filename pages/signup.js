import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
    if (e.target.name === "name") setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    let res = await fetch('/api/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response =  res;
    setEmail("");
    setName("");
    setPassword("");
    toast.success("Account Succesfully Created, Please login.", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      router.push("/login");
    }
    , 1500);
  };
  return (
    <>
    <ToastContainer/>
      <div className="max-w-[280px] py-5 mx-auto">
        <div className="flex flex-col items-center mt-[10vh]  bg-blue-500 p-5 rounded-xl">
          <h1 className="text-3xl font-bold text-white mb-5">Sign up</h1>
          <form action="">
            <input
              type="name"
              value={name}
              onChange={handleChange}
              name="name"
              id="name"
              className="w-full px-6 py-3 mb-6 text-black  rounded-lg font-medium "
              placeholder="Name"
            />
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
              placeholder="Password"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            >
              Register
            </button>
          </form>
          <p className="text-center text-white mt-3 text-[14px]">
            You will be automatically redirected to login once you signed up.
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup