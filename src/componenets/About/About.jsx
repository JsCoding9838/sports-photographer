import React from "react";
import developer from '../../assets/image/aboutme.png';

const About = () => {
  return (
    <div className=" w-screen bg-black text-white pt-24">
      <div className="w-4/5 mx-auto ">
        <div className="md:flex  md:items-center md:justify-between w-full">

          <div className="space-y-3 md:w-5/6">
            <p className="text-2xl">Hellow I'm</p>
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-semibold uppercase">Web <span className="text-[rgb(184,19,134)] italic"> Developer</span> </h1>
           <p className="md:text-1xl md:text-1xl lg:leading-6">I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my seven years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer lead for three projects with First Technology.</p>
          </div>

            <div className='w-full h-full'>
                <img className='w-full' src={developer} alt="" />
            </div>


        </div>
      </div>
    </div>
  );
};

export default About;
