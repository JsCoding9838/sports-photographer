import { Route, Routes } from "react-router-dom";
import CheckOut from "./componenets/CheckOut/CheckOut";

import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import RequireAuth from "./componenets/RequirAuth/RequirAuth";
import SignUp from "./componenets/SignUp/SignUp";
// import SignUp from "./componenets/Navber/SignUp";


function App() {
  return (
    <>
   <Navbar/>
   
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/login' element={<LogIn/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/checkout' element={<RequireAuth>
       <CheckOut/>
     </RequireAuth>}></Route>
     
   </Routes>
   
    </>
  );
}

export default App;
