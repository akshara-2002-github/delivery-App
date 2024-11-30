import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/Home" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;

