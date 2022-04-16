import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './componen/AboutMe/AboutMe';
import Blogs from './componen/Blogs/Blogs';
import Home from './componen/Home/Home';
import Navbar from './componen/Navbar/Navbar';
import Services from './componen/Services/Services';

function App() {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
      </Routes>

    </>
  );
}

export default App;
