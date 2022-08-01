import { Transition } from '@headlessui/react'
import { useState ,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slideup = () => {

  useEffect(()=>{
    AOS.init();

  },[]);

  return (
    <>
      
     <div className="hello my-28 mx-12 h-[400px] w-[900px] bg-[#e07c24]"></div>
     <div className="hello my-28 mx-12 h-[400px] w-[900px] bg-[#e07c24]"></div>
     <div data-aos="fade-up" className="hello my-28 mx-12 h-[400px] w-[900px] bg-[#e07c24]"></div>
     <div data-aos="fade-up" className="hello my-28 mx-12 h-[400px] w-[900px] bg-[#e07c24]"></div>
     <div data-aos="fade-up" className="hello my-28 mx-12 h-[400px] w-[900px] bg-[#e07c24]"></div>
    </>
  )
}

export default Slideup;