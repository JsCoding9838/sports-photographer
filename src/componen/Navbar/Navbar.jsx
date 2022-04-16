import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="w-screen">
           <div className='flex justify-between items-center z-10 px-4 h-20 fixed  md:px-8 lg:px-16 w-full bg-[rgb(41,55,75)] text-white'>
               <h1 className='text-2xl font-bold'>Logo</h1>
              <div>
              <ul className='hidden md:flex items-center text-xl'>
                  <Link to="/" className="px-4 ">Home</Link>
                  <Link to="/services" className="px-4 ">Services</Link>
                  <Link to="/blogs" className="px-4 ">Blogs</Link>
                  <Link to="/aboutme" className="px-4 ">About me</Link>
                   <div>
                       <button className='px-4 font-semibold py-2 rounded-full bg-[rgb(99,214,196)] shadow-2xl '>Sign Up</button>
                   </div>
               </ul>
              </div>
                  <div onClick={()=> setNav(!nav)} className='block md:hidden'>
               {  nav ?  <AiOutlineClose size={30}></AiOutlineClose> :
                  <AiOutlineBars size={30} ></AiOutlineBars>}
                  </div>
                  <div className={!nav ? 'md:hidden  fixed top-[-100%] w-full left-0 bg-[rgb(41,55,75)] text-2xl ease-in-out duration-1000' : 'md:hidden  fixed top-20 w-full left-0 bg-[rgb(41,55,75)] text-2xl ease-in-out duration-1000'}>
              <ul className='flex flex-col justify-center place-items-center'>
              <Link to="/" className="px-4 ">Home</Link>
           <Link to="/services" className="px-4 ">Services</Link>
           <Link to="/blogs" className="px-4 ">Blogs</Link>
           <Link to="/aboutme" className="px-4 ">About me</Link>
                   <div>
                       <button className='px-4 mb-8 font-semibold py-2 rounded-full bg-[rgb(99,214,196)] shadow-2xl '>Sign Up</button>
                   </div>
               </ul>
              </div>
              
               
               
               </div> 
        </div>
    );
};

export default Navbar;








// import React, { useState } from "react";
// import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [nav , setNav] = useState(false);
//   return (
//     <div className="w-screen text-white">
//       <div className="w-full flex justify-between items-center lg:20 md:px-20 px-4 bg-gray-600 h-20">
//         <h1 className="text-2xl">Logo</h1>
//         <div className="md:flex items-center text-xl hidden">
//           <ul className="flex items-center">
//             <Link to="/" className="px-4 ">Home</Link>
//             <Link to="/services" className="px-4 ">Services</Link>
//             <Link to="/blogs" className="px-4 ">Blogs</Link>
//             <Link to="/aboutme" className="px-4 ">About me</Link>
//           </ul>
//           <div>
//               <button className="bg-green-400 py-2 px-3 rounded-full shadow-2xl shadow-green-400/75 hover:bg-green-600">Sign Up</button>
//           </div>
//         </div>
//         <div onClick={()=> setNav(!nav)} className="md:hidden block text-white">
//           { nav ? <AiOutlineClose size={30}  /> :
//             <AiOutlineMenu size={30}  />}
//         </div>
//         <div className={nav ? "absolute top-20 left-0 bg-gray-600 w-full pb-4 ease-in-out duration-1000" : "absolute top-[-100%]  left-0 bg-gray-600 w-full pb-4 ease-in-out duration-1000"}>
//           <ul className="flex flex-col justify-center items-center">
//             <Link to="/" className="px-4 ">Home</Link>
//             <Link to="/services" className="px-4 ">Services</Link>
//             <Link to="/blogs" className="px-4 ">Blogs</Link>
//             <Link to="/aboutme" className="px-4 ">About me</Link>
//           </ul>
//           <div className='flex flex-col items-center'>
//               <button className="bg-green-400 py-2 px-8 rounded-full font-semibold shadow-2xl shadow-green-400/75 hover:bg-green-600">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
