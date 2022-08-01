import React from "react";
import ReactPlayer from "react-player";
import { useState ,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init();

  },[]);

  return (
    <div data-aos="fade-up" className="mt-64">
      <div className="text-white">
        <h1 data-aos="fade-up" className="text-[32px] font-bold text-center text-white pt-20 underline underline-offset-[10px] decoration-orange-500 laptop:text-[2.5rem] desktop:text-[3rem]">
          Why to join us ?
        </h1>
        <div data-aos="fade-up" className=" mt-1 flex-col justify-center p-5 desktop:flex desktop:flex-row laptop:flex laptop:flex-row laptop:gap-18 desktop:gap-20 items-center">
          <div className="video-wrapper h-[20rem] desktop:h-[40rem] desktop:w-[40rem] laptop:h-[30rem] laptop:w-[30rem] flex items-center justify-center">
          <ReactPlayer className=""
            url="https://www.youtube.com/watch?v=WMolA7QMP5w"
            playing={false}
            light={true}
            width='100%' 
            height='60%'
          />

          </div>
         

          <div data-aos="fade-up" className="desktop:w-[38%] laptop:w-[34%] laptop:ml-[25px] mt-8">
            <h1 data-aos="fade-up" className="text-justify desktop:text-start desktop:text-[18px] mb-5">
              Our goal is to make education and experiential skills affordable
              and accessible to everyone regardless of their disparate economic
              and educational backgrounds. We empower students to make demands
              unlike any other platform or institute because curiosity cannot be
              contained. Learning cannot be boxed in a book. So let’s step ahead
              and ‘build together’.
            </h1>
            <p className=" desktop:text-[22px] laptop:text-[19px] text-[22px] font-code text-[#E07C24] animate-pulse">
              #iwritecode
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="pb-16">
          <div className="flex justify-around mt-6 gap-6 flex-wrap">
            <div className="flex desktop:w-[200px] laptop:w-[200px] w-[180px] flex-col items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/books-icon.svg").default}
                alt=""
                className="w-[52px] desktop:w-[82px] desktop:mr-5"
              />
              <div className="text-center">
                <h3 className="text-[#E07C24]">400+</h3>
                <h3>Different cources</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="flex desktop:w-[200px] laptop:w-[200px] w-[180px] flex-col items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/student-iocn.svg").default}
                alt=""
                className="w-[52px] desktop:w-[82px] desktop:mr-5"
              />
              <div className="text-center">
                <h3 className="text-[#E07C24]">400000+</h3>
                <h3>Students Enrolled</h3>
              </div>
            </div>

            <div data-aos="fade-up" className="flex desktop:w-[240px] laptop:w-[240px] w-[180px] flex-col justify-center items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/credit-card-icon.svg").default}
                alt=""
                className="w-[52px] desktop:w-[82px] desktop:mr-5"
              />
              <div className="text-center">
                <h3 className="text-[#E07C24]">10000+</h3>
                <h3>Successful Transition</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
