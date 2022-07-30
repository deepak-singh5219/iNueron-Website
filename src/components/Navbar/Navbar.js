import React,{useState} from 'react';

const Navbar = () => {

const [sidemenu,sidemenuVisible]=useState(false);

    return (
    <>

      <div className="small-devices drop-shadow-[2px_2px_4px_#46474d] bg-[#28292D] flex items-center justify-between py-4 lg:hidden md:hidden">
        <button onClick={()=>sidemenuVisible(!sidemenu)}>

        <img src={require('./assets/menu.png')} alt="" className="menu w-8 h-8 ml-4" />
        </button>

        {/* <p className="lg:ml-16 md:ml-12 text-[#fff] font-bold text-[30px] logo-text">
          iNeuron
        </p> */}

        <img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo py-2 w-32" />

        <img src={require('./assets/search.png')} alt="" className="search-icon mr-4 w-6 h-6 rounded-lg" />



      </div>

      <div className={`drop-down absolute left-[-24rem] bg-[#2D2E32] py-10 w-96 lg:hidden md:hidden ease-in-out duration-300 ${(sidemenu)?'translate-x-full':'translate-x-0'}`}>

      <ul className="hover:cursor-pointer list flex flex-col  pl-10 items-start  justify-between">
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Contact<span><img src={require('./assets/right.png')} className="w-2 mx-1" alt="" /></span></li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">One Neuron</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Job Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Internship Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Become an affiliate</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Hall of Fame</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] text-[22px] font-bold my-4 py-2 hover:text-white hover:font-bold">Blog</li>
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] text-[22px] font-bold my-4 py-2  hover:text-white hover:font-bold">Company<span><img src={require('./assets/right.png')} className="w-2 mx-1" alt="" /></span></li>
      </ul>

      <div className="btns flex pl-10">
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-300 text-[#b1b1b1] hover:shadow-[#505050] rounded-full bg-transparent border-white border-2 px-5 py-2 text-[15px]">Sign Up</button>
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#F38F76] hover:-translate-y-1 hover:scale-110 duration-300 px-8 mx-4 py-3 rounded-full text-white bg-[#F38F76] text-[16px]">Login</button>
        </div>

      </div>

    <div className="hidden drop-shadow-[2px_2px_4px_#46474d] bg-[#28292D] nav md:flex md:flex-col md:py-7 lg:flex lg:flex-col lg:py-7 font-['poppins']">
      <div className="upper flex items-center justify-between ">
        {/* <p className="lg:ml-16 md:ml-12 text-[#fff] font-bold text-[30px] logo-text">
          iNeuron
        </p> */}

<img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo lg:ml-16 md:ml-12 py-2 w-32" />

        <div className="searchbar rounded-full flex items-center justify-center bg-[#2D2E32]">
          <img src={require('./assets/search.png')} alt="" className="search-icon ml-6 w-6 h-6 rounded-lg" />
          <input type="text" placeholder='What do you want to learn?' className="border-0 px-5 rounded-md bg-transparent lg:text-lg md:text-md md:h-[3rem] md:w-[25rem] lg:h-[4rem] lg:w-[34rem]" />
        </div>

        <div className="btns flex md:mr-8 lg:mr-16">
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#FFFFFF] hover:-translate-y-1 hover:scale-110 duration-300 text-[#b1b1b1] hover:shadow-[#505050] rounded-full bg-transparent border-white border-2 md:px-5 md:py-2 md:text-[12px] lg:text-[15px] lg:px-7 lg:py-3">Sign Up</button>
          <button className="btn transition ease-in-out delay-150 hover:cursor-pointer hover:drop-shadow-[2px_2px_4px_#F38F76] hover:-translate-y-1 hover:scale-110 duration-300 px-8 lg:mx-5 md:mx-4 py-3 rounded-full text-white bg-[#F38F76] md:px-6 md:py-2 lg:text-[16px] md:text-[12px]">Login</button>
        </div>

      </div>
      <div className="lower"></div>
      <ul className="hover:cursor-pointer list lg:flex lg:items-center lg:justify-between lg:mx-20 lg:mt-9 md:flex md:items-center md:justify-between md:mx-16 md:mt-6">
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Contact<span><img src={require('./assets/down-chevron.png')} className="lg:w-4 md:w-2 mx-1" alt="" /></span></li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">One Neuron</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Job Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Internship Portal</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Become an affiliate</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Hall of Fame</li>
        <li className="hover:cursor-pointer list-item text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Blog</li>
        <li className="hover:cursor-pointer flex items-center justify-center text-[#c5c5c5] md:text-[13px] lg:text-[17px] hover:text-white hover:font-bold">Company<span><img src={require('./assets/down-chevron.png')} className="lg:w-4 md:w-2 mx-1" alt="" /></span></li>
      </ul>
      
    </div>
    </>
    )
}

export default Navbar;