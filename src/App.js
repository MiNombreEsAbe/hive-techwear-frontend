import './bootstrap.min.css';
import './App.css';
import './assets/filler.css';
import './assets/footer.css';
import './assets/headerlanding.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/default/Footer'
import Router from './Router';
import Header from './components/Header';


function App() {
	return (
		<BrowserRouter>
		<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	);
}

export default App;