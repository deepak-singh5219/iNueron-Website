import React from 'react';


const Header = () => {
    return(
        <>
        <div className="header-largeScreen flex flex-col desktop:flex desktop:flex-row laptop:flex-row desktop:items-center desktop:justify-between laptop:flex laptop:align-items-center laptop:justify-between laptop:mx-16 laptop:my-24 desktop:mx-24 desktop:my-24 mx-8 my-8">
      <div className="left">
        <div className="tagline">
          <p className="text-white mb-1 desktop:text-[1.5rem] text-[1rem] laptop:text-[1.25rem]">Learn from the best of the industry</p>
          <div className="line desktop:h-[2px] desktop:w-[26rem] h-[1px] w-[17rem]  laptop:h-[1px] laptop:w-[21.5rem] bg-[#E07C24]"></div>
        </div>

        <h1 className="heading my-4 text-white font-bold text-[2rem] w-[20rem] desktop:text-[3.5rem] desktop:w-[36rem] laptop:text-[3rem] laptop:w-[28rem]">
          Highest in quality, affordable in price
        </h1>

        <p className="caption font-code desktop:text-[30px] laptop:text-[25px] text-[22px] text-[#E07C24]">#iwritecode</p>

        <div className="social flex mt-10 mb-10">
            <a href="https://www.facebook.com/ineuronai" className="social-links w-[32px] mr-5">
                <img src={require('./assets/facebook.png')} alt="" />
            </a>
            <a href="" className="social-links w-[32px] mr-5 ">
                <img src={require('./assets/twitter.png')} alt="" />
            </a>
            <a href="" className="social-links w-[32px] mr-5 ">
                <img src={require('./assets/instagram (1).png')} alt="" />
            </a>
            <a href="" className="social-links w-[32px] mr-5 ">
                <img src={require('./assets/youtube.png')} alt="" />
            </a>
        </div>

        <div className="buttons flex items-start">
        <button className=" laptop:text-sm h-[3rem] w-[8rem] text-[12px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg laptop:w-[10rem] desktop:w-[10rem]">Explore Courses</button>
          <button className="btn w-[8rem] text-[12px] transition h-[3rem] laptop:w-[10rem] desktop:w-[10rem] ease-in-out delay-150 hover:cursor-pointer hover:bg-transparent hover:-translate-y-1 hover:border-2 hover:border-[#E07C24] hover:scale-105 duration-300 mx-2 desktop:mx-4 laptop:mx-4 rounded-lg text-white bg-[#E07C24] desktop:text-[16px] laptop:text-[14px]">Contact Us</button>
        
        </div>

      </div>

      <img src={require('./assets/header-right.png')} alt="" className="right desktop:w-[50rem] laptop:w-[40rem] w-[30rem] mt-10" />
    </div>
        </>
    )
}

export default Header;