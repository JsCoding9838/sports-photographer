import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import auth from "../../Firebase/Firebase.init";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="w-screen">
      <div className="flex justify-between items-center lg:z-100 px-4 h-20 fixed  md:px-8 lg:px-16 w-full bg-[rgb(9,9,9)] shadow-2xl shadow-slate-800/50 text-white">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div>
          <ul className="hidden md:flex items-center text-xl">
            <Link to="/home" className="px-4">
              Home
            </Link>
            <Link to="/checkout" className="px-4">
              CheckOut
            </Link>
            <Link to="/blogs" className="px-4">Blogs</Link>
            <Link to="/aboutme" className="px-4">About Me</Link>
            <div>
              {user ? (
                <Link
                  to="/login"
                  onClick={() => signOut(auth)}
                  className="px-4 font-semibold py-2 rounded-full bg-[rgb(184,19,134)] shadow-2xl "
                >
                  Sign out
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="px-8 font-semibold py-2 rounded-full bg-[rgb(184,19,134)] shadow-2xl"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </ul>
        </div>
        <div onClick={() => setNav(!nav)} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30}></AiOutlineClose>
          ) : (
            <AiOutlineBars size={30}></AiOutlineBars>
          )}
        </div>
        <div
          className={
            !nav
              ? "md:hidden  fixed top-[-100%] w-full left-0 bg-[rgb(9,9,9)] text-2xl duration-1000 -z-50"
              : "md:hidden  fixed top-20 py-4 w-full left-0 bg-[rgb(9,9,9)] text-2xl duration-1000 -z-50"
          }
        >
          <ul className="flex flex-col justify-center place-items-center">
            <li className="py-1">Home</li>
            <li className="py-1">Services</li>
            <li className="py-1">Blogs</li>
            <li className="py-1 pb-3">About Me</li>
            <div>
              {user ? (
                <Link
                  to="/login"
                  onClick={() => signOut(auth)}
                  className="px-4 mb-8 font-semibold py-2 rounded-full bg-[rgb(184,19,134)] shadow-2xl "
                >
                  Sign out
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="px-8 mb-8 font-semibold py-1 rounded-full bg-[rgb(184,19,134)] shadow-2xl"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
