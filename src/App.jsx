import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Footer from './components/Footer'
import SpecialOffers from './pages/SpecialOffers';
import Resturants from "./pages/Resturants";
import TrackOrder from "./pages/TrackOrder";

const App = () => {
	return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/SpecialOffers" element={<SpecialOffers/>} />
        <Route path="/Resturants" element={<Resturants/>} />
        <Route path="/TrackOrder" element={<TrackOrder/>} />
        
       
        
      </Routes>

      <Footer />
    </>
	);
};

export default App;
