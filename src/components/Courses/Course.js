import React,{useState,useEffect} from 'react';
import Carousel from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Course = () => {
    const [drop,setDrop] = useState(false);

    useEffect(()=>{
        AOS.init();
    
      },[]);
    return (
        <>
        <div data-aos="fade-up" className="courses desktop:mt-4 laptop:mt-4 flex flex-col items-center justify-center">
            <h1 className="head text-white my-6 text-[1.65rem] font-bold laptop:text-[2.5rem] desktop:text-[3rem]">What you will learn</h1>
            <ul className="list hidden desktop:flex laptop:flex justify-between desktop:my-[5rem] laptop:my-5">
                <div className="glass laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem]">
                <li className="list-item font-bold ">Live Programs</li>
                </div>
                <div className="glass  laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem]">
                <li className="list-item font-bold ">Affordable Programs</li>
                </div>
                <div className="glass laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem]">
                <li className="list-item font-bold ">Community Programs</li>
                </div>
                <div className="glass laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem]">
                <li className="list-item font-bold ">One Neuron</li>
                </div>
                <div className="glass laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem]">
                <li className="list-item font-bold ">Test Series</li>
                </div>
            </ul>

           <button onClick={()=>setDrop(!drop)}>
           <div className="small-devices px-3 h-[3.5rem] flex items-center justify-between rounded-lg hover:bg-[#E07C24] w-[12rem] border-2 border-[#E07C24] desktop:hidden laptop:hidden">
             <h1 className="text-[#ffffff] text-lg font-bold">Live Program</h1>
            <img src={require('./assets/down-chevron.png')} className="w-[18px]" alt="" />
            </div>

           </button>

            <div className={`drop-down desktop:hidden px-3 mt-2 rounded-lg py-4 list-none laptop:hidden flex flex-col items-start bg-[#2D2E32] ${drop?'':'hidden'}`}>
                <li className="list-item text-[#d1d1d3] hover:text-[#ffffff] font-bold text-[17px] h-[40px] pl-4 w-[220px] my-1 bg-[#29292b] px-[4px] py-2">Live Programs</li>
                <li className="list-item text-[#d1d1d3] hover:text-[#ffffff] font-bold text-[17px] h-[40px] pl-4 w-[220px] my-1 bg-[#29292b] px-[4px] py-2">Affordable Programs</li>
                <li className="list-item text-[#d1d1d3] hover:text-[#ffffff] font-bold text-[17px] h-[40px] pl-4 w-[220px] my-1 bg-[#29292b] px-[4px] py-2">Community Programs</li>
                <li className="list-item text-[#d1d1d3] hover:text-[#ffffff] font-bold text-[17px] h-[40px] pl-4 w-[220px] my-1 bg-[#29292b] px-[4px] py-2">One Neuron</li>
                <li className="list-item text-[#d1d1d3] hover:text-[#ffffff] font-bold text-[17px] h-[40px] pl-4 w-[220px] my-1 bg-[#29292b] px-[4px] py-2">Test Series</li>
            </div>

            <div className="sub-head flex flex-col items-center justify-center">
                <h1 className=" text-white font-bold laptop:text-[2rem] text-[1.5rem] mt-8 desktop:text-[2.5rem]" >Live Programs</h1>
                <p className="desktop:my-3 text-[#c4c4c4] text-md mx-10 text-center my-5 desktop:text-lg laptop:text-lg">Get your program with live "instructor led" learning.</p>
            </div>

           
            
        </div>

        <div className="cards mx-16 flex items-center justify-center">
                <Carousel/>
            </div>
<div className="flex items-center justify-center my-5">

            <button className="glass laptop:text-sm h-[3rem] hover:text-white border-2 border-[#E07C24] text-[#ffffff] hover:cursor-pointer flex justify-center items-center hover:bg-[#E07C24] rounded-lg desktop:mx-8 laptop:mx-5 laptop:w-[12rem] desktop:w-[14rem] w-[12rem] font-bold">View More</button>
</div>
        </>
    )
}

export default Course;