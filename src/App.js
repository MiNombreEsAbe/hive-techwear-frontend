import './bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer'
import Router from './Router';
/** import Header from './components/Header' **/


function App() {
	return (
		<BrowserRouter>
			<Router />
			<Footer />
		</BrowserRouter>
	);
}

export default App;