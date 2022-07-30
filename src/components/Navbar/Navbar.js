import React,{useState} from 'react';

const Navbar = () => {

const [sidemenu,sidemenuVisible]=useState(false);

    return (
    <>

      <div className="small-devices bg-[#28292D] flex items-center justify-between py-3 desktop:hidden laptop:hidden">
        <button onClick={()=>sidemenuVisible(!sidemenu)}>

        <img src={require('./assets/menu.png')} alt="" className="menu w-6 h-6 ml-4" />
        </button>

        {/* <p className="desktop:ml-16 laptop:ml-12 text-[#fff] font-bold text-[30px] logo-text">
          iNeuron
        </p> */}

        <img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo py-2 w-32" />

        <img src={require('./assets/search.png')} alt="" className="search-icon mr-4 w-6 h-6 rounded-desktop" />



      </div>

      <div className={`drop-down absolute left-[-24rem] bg-[#2D2E32] py-10 w-96 desktop:hidden laptop:hidden ease-in-out duration-300 ${(sidemenu)?'translate-x-full':'translate-x-0'}`}>

      <ul className="hover:cursor-pointer list flex flex-col  pl-10 items-start  justify-between">
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Contact<span><img src={require('./assets/right.png')} className="w-2 mx-1" alt="" /></span></li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">One Neuron</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Job Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Internship Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Become an affiliate</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Hall of Fame</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-[#E07C24] hover:font-bold">Blog</li>
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] text-[22px] font-bold my-4 py-2  hover:text-[#E07C24] hover:font-bold">Company<span><img src={require('./assets/right.png')} className="w-2 mx-1" alt="" /></span></li>
      </ul>

      <div className="btns flex pl-10">
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-300 text-[#b1b1b1] hover:shadow-[#505050] rounded-full bg-transparent border-white border-2 px-5 py-2 text-[15px]">Sign Up</button>
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#F38F76] hover:-translate-y-1 hover:scale-110 duration-300 px-8 mx-4 py-3 rounded-full text-white bg-[#F38F76] text-[16px]">Login</button>
        </div>

      </div>

    <div className="hidden drop-shadow-[2px_2px_10px_#ff943636] bg-[#28292D] nav laptop:flex laptop:flex-col laptop:py-7 desktop:flex desktop:flex-col desktop:py-5 font-['poppins']">
      <div className="upper flex items-center justify-between ">
        {/* <p className="desktop:ml-16 laptop:ml-12 text-[#fff] font-bold text-[30px] logo-text">
          iNeuron
        </p> */}

<img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo desktop:ml-16 laptop:ml-12 py-2 w-32" />

        <div className="searchbar rounded-full flex items-center justify-center bg-[#2D2E32]">
          <img src={require('./assets/search.png')} alt="" className="search-icon ml-6 w-6 h-6 rounded-desktop" />
          <input type="text" placeholder='What do you want to learn?' className="border-0 px-5 rounded-laptop bg-transparent desktop:text-desktop laptop:text-laptop laptop:h-[3rem] laptop:w-[25rem] desktop:h-[4rem] desktop:w-[34rem]" />
        </div>

        <div className="btns flex laptop:mr-8 desktop:mr-16">
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-300 text-[#b1b1b1] hover:shadow-[#505050] rounded-full bg-transparent border-white border-2 laptop:text-[12px] desktop:text-[15px] desktop:h-12 desktop:w-28 laptop:h-12 laptop:w-28">Sign Up</button>
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#F38F76] hover:-translate-y-1 hover:scale-110 duration-300 desktop:mx-5 laptop:mx-4 rounded-full text-white bg-[#E07C24] desktop:h-12 desktop:w-28 laptop:h-12 laptop:w-28 desktop:text-[16px] laptop:text-[12px]">Login</button>
        </div>

      </div>
      <div className="lower"></div>
      <ul className="hover:cursor-pointer list desktop:flex desktop:items-center desktop:justify-between desktop:mx-20 desktop:mt-6 laptop:flex laptop:items-center laptop:justify-between laptop:mx-16 laptop:mt-5">
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Contact<span><img src={require('./assets/down-chevron.png')} className="desktop:w-3 laptop:w-2 mx-1" alt="" /></span></li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">One Neuron</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Job Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Internship Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Become an affiliate</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Hall of Fame</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Blog</li>
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] laptop:text-[13px] desktop:text-[17px] hover:text-[#ffffff] hover:font-bold">Company<span><img src={require('./assets/down-chevron.png')} className="desktop:w-3 laptop:w-2 mx-1" alt="" /></span></li>
      </ul>
      
    </div>
    </>
    )
}

export default Navbar;