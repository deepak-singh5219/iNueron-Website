import React,{useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './mentor.css';
import {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mentor = () => {

    useEffect(()=>{
        AOS.init();
    
      },[]);

    const settings = {
        
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        cssEase:"linear",
        responsive: [
            {
              breakpoint: 1380,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      }

    const Mentors = [
        {
          imageSrc:1,
          name: 'Hitesh Choudhary',
          designation:'CTO',
        },
        {
          imageSrc:6,
          name: 'Sourangshu Pal',
          designation:'Mentor',
        },
        {
          imageSrc:2,
          name: 'Sunny Bhaveen Chandra',
          designation:'Data Scientist',
        },
        {
          imageSrc:3,
          name: 'Mukesh Otwani',
          designation:'VP Automation',
        },
        {
          imageSrc:4,
          name: 'Kiran Sahu',
          designation:'Mentor',
        },
        {
          imageSrc:5,
          name: 'Sudhanshu Kumar',
          designation:'AI Engineer & CEO',
        },
        
       
      ]

    return(

        <div data-aos="fade-up" className="mentors flex flex-col items-center justify-center desktop:mt-48 laptop:mt-32 mt-24">

<h1 className="head text-white my-6 text-[1.75rem] font-bold laptop:text-[2.5rem] desktop:text-[3rem]">Tech Avengers</h1>

        <Slider {...settings}>
       {
        Mentors.map((card)=>
       (

    <div className="card flex flex-col px-4 py-3 bg-[#7A7B7F]/10 justify-between items-center h-[28rem] rounded-lg my-4">
           <div className="upper my-4 flex flex-col items-center justify-center">
           <img src={require(`./assets/${card.imageSrc}.png`)} alt="" className="drop-shadow-[2px_2px_4px_#3d3a3a] desktop:w-[200px] laptop:w-[150px] w-[170px] rounded-full py-3 "/>
            <h1 className="title text-[#ffffff] font-bold text-[1.35rem] py-2">{card.name}</h1>
           </div>
            <div className="bottom flex items-center justify-center">
            <p className="name text-[#cec9c4] text-[18px]">{card.designation}</p>
           
            </div>

            <div className="social flex items-center justify-center my-5 mt-8 ">
            <a href="https://www.facebook.com/ineuronai" className="social-links w-[28px] mx-3">
                <img src={require('./assets/facebook.png')} alt="" />
            </a>
            <a href="" className="social-links w-[28px] mx-3 ">
                <img src={require('./assets/twitter.png')} alt="" />
            </a>
            <a href="" className="social-links w-[28px] mx-3 ">
                <img src={require('./assets/instagram (1).png')} alt="" />
            </a>
        </div>
            </div>

        )
        )
         }

        </Slider>

    </div>

    )
}

export default Mentor;