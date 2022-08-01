import React,{useState,useEffect} from 'react';
import './header.css';
import { Transition } from '@headlessui/react';



const Header = () => {

  const [isShowing, setIsShowing] = useState(false);

  useEffect(()=>{

    setTimeout(() => {
        setIsShowing(true);
      }, 100);

  },[]);


    return(
        <>
        <img src={require('./assets/hitesh.jpg')} alt="" className="hidden absolute desktop:block laptop:block brightness-50 opacity-30 z-0" />
        <div className="header-largeScreen flex flex-col desktop:flex desktop:flex-row laptop:flex-row desktop:items-center desktop:justify-between laptop:flex laptop:align-items-center laptop:justify-between laptop:mx-16 laptop:my-24 desktop:mx-24 desktop:my-4 mx-8 my-8">
      


        <Transition 
        show={isShowing}
        enter="transform transition ease-in-out duration-1000"
        enterFrom="opacity-0 translate-y-24"
        enterTo="opacity-100 tarnslate-y-0"
        leave='transform transition ease-in-out duration-1000'
        leaveFrom="opacity-100 translate-y-full"
        leaveTo="opacity-0 translate-y-24">

<div className="left">
        <div className="tagline">
          <p className="text-white mb-1 z-10 desktop:text-[1.5rem] text-[1rem] laptop:text-[1.25rem]">Learn from the best of the industry</p>
          <div className="line desktop:h-[2px] desktop:w-[26rem] h-[1px] w-[17rem]  laptop:h-[1px] laptop:w-[21.5rem] bg-[#E07C24]"></div>
        </div>

        <h1 className="heading my-4 z-10 text-[#ffffff] font-bold text-[2rem] w-[20rem] desktop:text-[3.5rem] desktop:w-[36rem] laptop:text-[3rem] laptop:w-[28rem]">
          Highest in quality, affordable in price
        </h1>

        <p className="caption font-code desktop:text-[30px] laptop:text-[25px] text-[22px] text-[#fd8f2e] z-10 animate-pulse">#iwritecode</p>

        <div className="social flex mt-10 mb-10">
            <a href="https://www.facebook.com/ineuronai" className="social-links transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 z-10 w-[32px] mr-5">
                <img src={require('./assets/facebook.png')} alt="" />
            </a>
            <a href="" className="social-links transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 z-10 w-[32px] mr-5 ">
                <img src={require('./assets/twitter.png')} alt="" />
            </a>
            <a href="" className="social-links transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 z-10 w-[32px] mr-5 ">
                <img src={require('./assets/instagram (1).png')} alt="" />
            </a>
            <a href="" className="social-links transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 z-10 w-[32px] mr-5 ">
                <img src={require('./assets/youtube.png')} alt="" />
            </a>
        </div>

        <div className="buttons flex items-start z-10">
        <button className=" laptop:text-sm h-[3rem] z-10 w-[8rem] text-[12px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white border-2 border-[#e07c24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#e07c24] rounded-lg laptop:w-[10rem] desktop:w-[10rem]">Explore Courses</button>
          <button className="btn w-[8rem] z-10 text-[12px] transition h-[3rem] laptop:w-[10rem] desktop:w-[10rem] ease-in-out delay-150 hover:cursor-pointer hover:bg-transparent hover:-translate-y-1 hover:border-2 hover:border-[#e07c24] hover:scale-105 duration-300 mx-2 desktop:mx-4 laptop:mx-4 rounded-lg text-white bg-[#e07c24] desktop:text-[16px] laptop:text-[14px]">Contact Us</button>
        
        </div>

      </div>

            </Transition>

            <Transition 
        show={isShowing}
        enter="transform transition ease-in-out duration-1000"
        enterFrom="opacity-0 translate-y-24"
        enterTo="opacity-100 tarnslate-y-0"
        leave='transform transition ease-in-out duration-1000'
        leaveFrom="opacity-100 translate-y-24"
        leaveTo="opacity-0 translate-y-full">

<div className="right">
      <img src={require('./assets/interview.png')} alt="" className="right hidden desktop:block laptop:block first-letter: desktop:w-[60rem] laptop:w-[40rem] w-[45rem] mt-10" />
      <img src={require('./assets/header-right.png')} alt="" className="right desktop:hidden laptop:hidden w-[30rem] mt-16" />


      <img
                src={require("./assets/frame1.png")}
                alt=""
                class="icon-1 smooth-zigzag-anim-1 hidden desktop:block laptop:block absolute laptop:top-[280px] laptop:right-[] desktop:top-[200px] desktop:right-[150px] rounded-lg"
                width="210"
              />
              <img
                src={require("./assets/frame2.png")}
                alt=""
                class="icon-2 smooth-zigzag-anim-2 hidden desktop:block laptop:block rounded-lg absolute laptop:top-[500px] laptop:right-[200px] desktop:top-[800px] desktop:right-[100px]"
                width="195"
              />
              <img
                src={require("./assets/frame3.png")}
                alt=""
                class="icon-3 smooth-zigzag-anim-3 hidden desktop:block laptop:block rounded-lg absolute laptop:top-[600px] laptop:right-[500px] desktop:top-[550px] desktop:right-[400px]"
                width="195"
              />
              <img
                src={require("./assets/frame6.png")}
                alt=""
                class="icon-3 smooth-zigzag-anim-3 hidden desktop:block laptop:block rounded-lg absolute laptop:top-[200px] laptop:right-[100px] desktop:top-[800px] desktop:right-[800px]"
                width="195"
              />
              <img
                src={require("./assets/frame4.png")}
                alt=""
                class="icon-3 smooth-zigzag-anim-3 hidden desktop:block laptop:block rounded-lg absolute laptop:top-[] laptop:right-[120px] desktop:top-[280px] desktop:right-[700px] "
                width="220"
              />
              <img
                src={require("./assets/Frame 5.png")}
                alt=""
                class="icon-4 drop-anim absolute hidden desktop:block laptop:hidden desktop:top-[600px] laptop:top-[] laptop:right-[] desktop:right-[900px]"
              />
       
      </div>
    
           

            </Transition>
        
      
     

    </div>
        </>
    )
}

export default Header;