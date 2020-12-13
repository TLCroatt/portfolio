import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
      <div>
        <Navbar />
        <Home
          title="Home"
          dark={true}
          id="home"
        />
        <About
          title="About Me"
          dark={false}
          id="about"
        />
        <Portfolio
          title="My Work"
          dark={true}
          id="portfolio"
        />
        <Contact
          title="Contact Me"
          dark={false}
          id="contact"
        />
        <Footer />
      </div>
    );
}

export default App;
