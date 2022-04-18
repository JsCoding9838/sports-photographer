import React from 'react';

const Blogs = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center md:flex md:justify-center md:items-center bg-[rgb(27,25,26)] mb-4">
            <h1 className="mt-24 text-[23px] font-bold md:text-5xl md:mb-6 text-white">About Something Firebase</h1>
            
            <div className="md:flex lg:flex">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2">
                    <div className="py-4">
                        <div className="font-bold text-xl w-full mb-2">Defferrent between autoriaztion and authentication?</div>
                        <p className="text-white">
                        In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.

Comparing these processes to a real-world example, when you go through security in an airport, you show your ID to authenticate your identity. Then, when you arrive at the gate, you present your boarding pass to the flight attendant, so they can authorize you to board your flight and allow access to the plane.
                        </p>
                    </div>
                    <div className="pt-4 text-center">
                        <span className="inline-block rounded-full px-6 py-2 text-sm font-semibold bg-[rgb(184,19,134)] hover:bg-[rgb(141,21,105)] duration-1000 text-white">See More</span>
                        
                    </div>
                </div>


                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2">
                    <div className="py-4">
                        <div className="font-bold text-xl mb-2">Why are you using firebase ? What other option do you have to implement authentication?</div>
                        <p className="text-white">
                        Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2. <br />
                        Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs.
                        </p>
                    </div>
                    <div className="pt-4 text-center">
                        <span className="inline-block rounded-full px-6 py-2 text-sm font-semibold bg-[rgb(184,19,134)] hover:bg-[rgb(141,21,105)] duration-1000 text-white">See More</span>
                        
                    </div>
                </div>



                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-600 text-white mt-2 px-4 py-4 mx-2">
                    <div className="py-4">
                        <div className="font-bold text-xl mb-2">What other services does firebase Provide other than authentication?</div>
                        <p className="text-white">
                        There are many services which Firebase provides, Most useful of them are:
                        <p>Authentication.</p>
                        <p>Hosting.</p>
                        <p>Cloud Storage.</p>
                        <p>Google Analytics.</p>
                        You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers
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