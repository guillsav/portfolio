import React from 'react';

import './App.css';

import Header from './components/Header/Header.components';
import Footer from './components/Footer/Footer.components';
import Navigation from './components/Navigation/Navigation.components';
import HomePage from './pages/home/home.components';
import AboutPage from './pages/about/about.components';

function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <HomePage />
            <AboutPage />
            <Footer />
        </div>
    );
}

export default App;
