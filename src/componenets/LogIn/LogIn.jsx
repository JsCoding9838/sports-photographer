import React from "react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import useInputValue from "../../useInputValue";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { userInfo, getEmail, getPassword, errors } = useInputValue();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, Fuser, Floading, Ferror] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [updatePassword, updating, updateError] = useUpdatePassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const userSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div className="w-screen text-white pt-32 bg-[rgb(0,0,0)] lg:h-screen">
      <div className="lg:mt-44 md:w-[600px] w-[90%] bg-[rgb(41,55,75)] mx-auto rounded-2xl shadow-2xl shadow-[rgb(41,55,75)]/75">
        <div className="w-full lg:px-20 p-4 ">
          <div className="text-center text-2xl font-semibold">SIGN IN</div>
          <form onSubmit={userSignIn} className="w-full pt-8">
            <div className="mb-10">
              <label>E-MAIL</label>
              <input
                onChange={getEmail}
                type="email"
                placeholder="Enter your email"
              />
              <p className="text-red-500 pt-1">{errors?.emailErrors}</p>
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

            <p
              onClick={async () => {
                await updatePassword(userInfo.password);
                alert("Updated password");
              }}
              className="underline ml-2 cursor-pointer p-2 underline-offset-4 decoration-[rgb(184,19,134)]"
            >
              Forgot your password?
            </p>

            <div className="mt-10 space-y-4 md:space-x-4 md:items-center">
              <div>
              <button
                type="submit"
                className="bg-[rgb(184,19,134)] md:text-xl font-semibold px-4  md:px-6 py-1 md:py-3 rounded-full w-full"
              >
                Sign In
              </button>
              </div>
              <div className="text-center">
              <Link
                to="/signup"
                className="underline  underline-offset-4 decoration-[rgb(184,19,134)] px-1 pb-3"
              >
                Create new Account
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

export default LogIn;
