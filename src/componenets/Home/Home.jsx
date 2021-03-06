import React from "react";
import banner from "../../assets/image/banner.webp";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <div className="w-screen md:px-16 pt-24 px-2  md:pt-44 text-white  bg-gray-900">
        <div className="w-full h-full mx-auto md:pt-20 lg:pt-44">
          <div className="lg:flex justify-between items-center ">
            <div className="lg:space-y-4 md:space-y-2  w-full h-full text-center lg:text-left  md:pr-2">
              <p className="lg:text-4xl">Hellow, I'm</p>
              <h1 className="lg:text-5xl font-bold md:text-3xl  text-2xl italic uppercase">
              Sports Photographer LIFE
              </h1>
              <p className="lg:text-xl text-[14px] md:text-base text-gray-400 pb-2 ">
                These pictures can be either stored as a soft copy or they can
                be printed on photographi . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repudiandae cum repellendus nisi quas.
              </p>
              <div className="w-full">
                <button className="bg-[rgb(184,19,134)]/70 hover:bg-[rgb(184,19,134)] mb-4  md:text-xl font-semibold  lg:px-10 lg:py-4 md:px-6 md:py-2 px-3 py-1 md:mb-8 rounded-full uppercase ">
                  See more
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              <img
                className="lg:w-[1200px] md:[200px] rounded-2xl pb-14"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Services/>
     
    </>
  );
};

export default Home;
