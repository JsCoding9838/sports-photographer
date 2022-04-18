import React from 'react';

const Blogs = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center md:flex md:justify-center md:items-center bg-red-100 mb-4">
            <h1 className="mt-24 text-[23px] font-bold md:text-5xl md:mb-6">About Something Firebae</h1>
            
            <div className="md:flex lg:flex">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2 md:py-16">
                    <div className="py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 text-center">
                        <span className="inline-block rounded-full px-6 py-2 text-sm font-semibold bg-[rgb(184,19,134)] hover:bg-[rgb(141,21,105)] duration-1000 text-white">See More</span>
                        
                    </div>
                </div>


                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2">
                    <div className="py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 text-center">
                        <span className="inline-block rounded-full px-6 py-2 text-sm font-semibold bg-[rgb(184,19,134)] hover:bg-[rgb(141,21,105)] duration-1000 text-white">See More</span>
                        
                    </div>
                </div>



                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2">
                    <div className="py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="pt-4 text-center">
                        <span className="inline-block rounded-full px-6 py-2 text-sm font-semibold bg-[rgb(184,19,134)] hover:bg-[rgb(141,21,105)] duration-1000 text-white">See More</span>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;