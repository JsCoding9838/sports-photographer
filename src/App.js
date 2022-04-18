import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./componenets/CheckOut/CheckOut";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import SignUp from "./componenets/SignUp/SignUp";
import RequirAuth from './componenets/RequirAuth/RequirAuth.jsx'
import Blogs from './componenets/Blogs/Blogs.jsx'
import About from "./componenets/About/About";

 export const serviceContext = createContext()

function App() {
  const [service, setService] = useState([]);
  

  return (
    <>
    <serviceContext.Provider value={[service, setService]}>
      <Navbar />

     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/aboutme' element={<About></About>} />
        {/* <Route path='/aboutme' element={<About></About>} /> */}
        
        <Route path='/checkout' element={<RequirAuth>
          <CheckOut/>
        </RequirAuth>} />
       
     </Routes>
      </serviceContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
