import React from "react";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className="">
      <div className="text-white">
        <h1 className="text-[32px] font-bold text-center text-white pt-20 underline underline-offset-[10px] decoration-orange-500">
          Why to join us ?
        </h1>
        <div className=" mt-5 flex-col  justify-center p-5 desktop:flex-row desktop:gap-20 items-center">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=WMolA7QMP5w"
            playing={true}
            light
          />
          <div className="desktop:w-[38%] mt-8">
            <h1 className="text-justify   desktop:text-start desktop:text-[18px] mb-5">
              Our goal is to make education and experiential skills affordable
              and accessible to everyone regardless of their disparate economic
              and educational backgrounds. We empower students to make demands
              unlike any other platform or institute because curiosity cannot be
              contained. Learning cannot be boxed in a book. So let’s step ahead
              and ‘build together’.
            </h1>
            <p className=" desktop:text-[22px] laptop:text-[19px] text-[22px] text-[#E07C24] animate-pulse">
              #iwritecode
            </p>
          </div>
        </div>
        <div className="pb-16">
          <div className="flex justify-around mt-6">
            <div className="flex  flex-col items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/books-icon.svg").default}
                alt=""
                className="w-[22px] desktop:w-[82px] desktop:mr-5"
              />
              <div className="text-center">
                <h3 className="text-[#E07C24]">400+</h3>
                <h3>Different cources</h3>
              </div>
            </div>

            <div className="flex  flex-col items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/student-iocn.svg").default}
                alt=""
                className="w-[22px] desktop:w-[82px] desktop:mr-5"
              />
              <div className="text-center">
                <h3 className="text-[#E07C24]">400000+</h3>
                <h3>Students Enrolled</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center text-[13px] desktop:text-[22px] gap-3">
              <img
                src={require("./assets/credit-card-icon.svg").default}
                alt=""
                className="w-[22px] desktop:w-[82px] desktop:mr-5"
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
