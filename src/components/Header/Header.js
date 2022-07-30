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

        <h1 className="heading my-4 text-white font-bold text-[2.5rem] w-[24rem] desktop:text-[3.5rem] desktop:w-[36rem] laptop:text-[3rem] laptop:w-[28rem]">
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

      </div>

      <img src={require('./assets/header-right.png')} alt="" className="right desktop:w-[50rem] laptop:w-[40rem] w-[30rem] mt-10" />
    </div>
        </>
    )
}

export default Header;