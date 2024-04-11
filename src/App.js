import "./App.css";
import React, { useRef } from 'react';
import Home from "./Components/Home/Home";
import About from "./Components/Flowers/About";
import Work from "./Components/work/Work";
import Testimonial from "./Components/AboutTeam/Testimonial";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/footer/Footer";
import Navbar from './Components/navbar/Navbar';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null); // Assuming you have a ref for the Work section
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar refs={{homeRef, aboutRef, workRef, testimonialsRef, contactRef}} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Work ref={workRef} />
      <Testimonial ref={testimonialsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
