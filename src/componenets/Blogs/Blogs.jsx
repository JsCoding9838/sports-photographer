import React from "react";

const Blogs = () => {
  return (
    <div className="pt-24 w-full h-full text-justify text-white bg-black">
      <div className="w-4/5 mx-auto pb-20 ">
          <h1 className="text-center text-xl font-semibold lg:text-5xl py-8 md:text-2xl">About Firebase</h1>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">Defferrent between autoriaztion and authentication?</h1>
            <p className="leading-6 ">
            In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.

 Comparing these processes to a real-world example, when you go through security in an airport, you show your ID to authenticate your identity. Then, when you arrive at the gate, you present your boarding pass to the flight attendant, so they can authorize you to board your flight and allow access to the plane.</p>
           
        </div>
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">Why are you using firebase ? What other option do you have to implement authentication? </h1>
            <p>
            
            Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2. <br />
                      Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs. 
            </p>
        </div>
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">What other services does firebase Provide other than authentication? ?</h1>
            
            <p>
            There are many services which Firebase provides, Most useful of them are:
                       <p>Authentication.</p>
                         <p>Hosting.</p>
                        <p>Cloud Storage.</p>
                       <p>Google Analytics.</p>
                        You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers
            </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Blogs;