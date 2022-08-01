import React from "react";

const Product = [
  {
    imageSrc: 7,
    pName: "Job Portal",
    detail:
      "Use exceptional templates for a stand-out resume minus the sign up process",
  },
  {
    imageSrc: 6,
    pName: "Internship portal",
    detail:
      "iNeuron self-paced internship portal prioritises hands-on training with 570+ internship projects",
  },
  {
    imageSrc: 9,
    pName: "Become an affiliate",
    detail:
      "Explore affiliate marketing opportunities with iNeuron and attain financial frredom",
  },
  {
    imageSrc: 3,
    pName: "Hall of fame",
    detail:
      "Our student placements and 10+ career transitions speak volumes about our courses",
  },
  {
    imageSrc: 2,
    pName: "InBlog",
    detail: "Explore all you want about your favourite courses",
  },
];

function Products() {
  return (
    <>
      <div className="products flex flex-col items-center justify-center">
        <h1 className="head text-white my-6 text-[1.75rem] font-bold laptop:text-[2.5rem] desktop:text-[3rem]">
          Our Products
        </h1>
      </div>

      <div className="desktop:flex flex-wrap items-center justify-center p-3">
        {Product.map((p) => (
          <div className="pb-16  items-center justify-center w-screen desktop:w-1/3">
            <div className=" flex mt-6 gap-6 justify-center">
              <div className="flex flex-wrap flex-col items-center  justify-center text-[25px] desktop:text-[22px] gap-2  desktop:w-4/5 cursor-pointer  bg-[#7A7B7F]/10 p-5 h-[20rem] w-[30rem] rounded-md hover:scale-105 duration-300 desktop:hover:scale-110 duration-300 ">
                <img
                  src={require(`./assets/${p.imageSrc}.svg`)}
                  alt=""
                  className="w-[110px] desktop:w-[98px] desktop:mr-5"
                />
                
                <div className="text-center">
                  <h3 className="text-[#E07C24] mb-3">{p.pName}</h3>
                  <h3 className="text-white text-[14px] w-4/5 m-auto ">{p.detail}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
