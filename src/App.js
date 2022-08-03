import React, { useState, useEffect, useRef } from "react";
import Animator from "./components/Animator/Animator";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Course from "./components/Courses/Course";
import Mentor from "./components/Mentors/Mentor";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slideup from "./components/Transitions/Slideup";
import Contact from "./components/Contactus/Contact";




const App = () => {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {  
    AOS.init();
  setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Animator />
      ) : (
        <div className="content">
          <div className="bg-[#000000] font-[poppins] bg-gradient-to-tr from-[#000000] via-[#0c0c0c] to-[#eb6e2513]">
            <Navbar />
            <Header />

            <div data-aos="fade-up" className="wrapper"><About /></div>
            <div data-aos="fade-up" className="wrapper"><Course /></div>
            <div data-aos="fade-up" className="wrapper"><Products /></div>
            <div data-aos="fade-up" className="wrapper"><Mentor /></div>
            <div data-aos="fade-up" className="wrapper"><Testimonial/></div>
            <div data-aos="fade-up" className="wrapper"><Contact/></div>
            
            
          
            <Footer/>
         
          </div>
            
        
          
        </div>
      )}
    </div>
  );
};

export default App;
