import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import useInputValue from "../../useInputValue";

import {
 
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    userInfo,
    getEmail,
    getPassword,
    getConfirmPassword,
   
    chackehandler,
    errors,
  } = useInputValue();
  let navigate = useNavigate();

  const [signInWithGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub] =
    useSignInWithGithub(auth);
  const [signInWithFacebook] =
    useSignInWithFacebook(auth);

    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
   
 if(user){
   navigate('/home')
 }

 
    const createUser = (e) => {
    e.preventDefault();
console.log(userInfo.email, userInfo.password)
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="w-screen text-white pt-32">
      <div className=" md:w-[600px] w-[90%] bg-[rgb(41,55,75)] mx-auto rounded-2xl shadow-2xl shadow-[rgb(41,55,75)]/75 mb-6 lg:mt-32">
        <div className="w-full lg:px-20 p-4 ">
          <div className="text-center text-2xl font-semibold uppercase">Sign Up</div>
          <form onSubmit={createUser} className="w-full pt-8">
            <div className="mb-10">
              <label>E-MAIL</label>
              <input
                onChange={getEmail}
                type="email"
                placeholder="Enter your email"
              />
              <p className="text-red-500 mt-1">{errors?.emailErrors}</p>
            </div>

            <div className="mb-10">
              <label>PASSWORD</label>
              <input
                onChange={getPassword}
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-red-500 pt-1 ">{errors?.passwordErrors}</p>
            </div>

            <div className="mb-10">
              <label>Confirm Password</label>
              <input
                onChange={getConfirmPassword}
                type="password"
                placeholder="Enter your confirm password"
              />
              <p className="text-red-500 pt-1 ">
                {errors?.confirmPasswordErrors}
              </p>
            </div>

            <span>
              <input
                onClick={chackehandler}
                className=" w-3"
                ch
                type="checkbox"
              />
              <span className="ml-2">
                I agree all{" "}
                <span className="underline  underline-offset-4 decoration-[rgb(184,19,134)]">
                  terms of Service
                </span>
              </span>
            </span>
            <p className="text-red-500 pt-1 ">{errors?.checkboxError}</p>

            <div className=" justify-center mt-10 space-y-4 md:space-x-4 md:items-center">
             <div>
             <button
                type="submit"
                className="bg-[rgb(184,19,134)] md:text-xl font-semibold px-4  md:px-6 py-1 md:py-3 rounded-full w-full"
              >
                
                Sign Up
              </button>
             </div>
              <div className="text-center">
              <Link
                to="/login"
                className="underline  underline-offset-4 decoration-[rgb(184,19,134)] px-1 pb-3"
              >
                I'm already member
              </Link>
              </div>
            </div>
          </form>
          <div className="w-full flex items-center pt-6">
            <hr className="w-1/2 mr-2" /> <span>or</span>{" "}
            <hr className="w-1/2 ml-2" />
          </div>
          <div className="flex justify-between  text-white">
            <p onClick={() => signInWithGithub()} className="p-6 cursor-pointer">
              <AiFillGithub size={40} />
            </p>
            <p onClick={() => signInWithGoogle()} className="p-6 cursor-pointer">
              <AiFillGoogleCircle size={40} />
            </p>
            <p onClick={() => signInWithFacebook()} className="p-6 cursor-pointer">
              <FaFacebook size={40} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
