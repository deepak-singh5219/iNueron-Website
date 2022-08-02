import React,{useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './testimonial.css';
// import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


const Testimonial = () => {

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


    

      const Students = [
        {
          imageSrc:1,
          name: 'Sameer Kumar',
          message:'Hello everyone, My name is Sameer Kumar and I am a final year B.Tech student from SIT, Pune. I recently got placed at Bajaj Finserv as a Data Scientist for a 13LPA package.',
          designation:'Data Scientist, Bajaj Finserv',
        },
        {
          imageSrc:2,
          name: 'Aakash B',
          message:'I was following Krish Sir YouTube channel for more than 2-3 year. I learnt Machine Learning and Deep Learning from him. I learnt basics of big data from Sudhanshu sir.',
          designation:'Software Development Engineer 1, Amazon',
        },
        {
          imageSrc:3,
          name: 'Chitra Patgar',
          message:'I have enrolled for your ML course two years back , Python you taught in that course was awesome due to which I have cracked about 5 interview and concepts were also so much cleared . ',
          designation:'Programmer Analyst, Cognizant',
        },
        {
          imageSrc:4,
          name: 'Shrivatsa G',
          message:'A few days back I was scheduled for an interview at ECOLABS. Thanks to Naveen Reddy sir, I was confidence and also did answer most of the questions on OOPs concept.',
          designation:'Trainee software developer, ECOLAB',
        },
        
      ]


    return(
        <div data-aos="fade-up" className="testimonial desktop:mt-48 laptop:mt-32 mt-24">

            <h1 className="text-[#ffffff] text-center font-bold desktop:text-[40px] laptop:text-[32px] text-[25px]">What our students say?</h1>


<div class="container mx-auto mt-20">
 
		
      <div class="mb-16 flex items-center justify-center">

      <Slider {...settings}>
        {

            Students.map((student)=> (
                <div data-aos="fade-up" class="bg-[#7A7B7F]/10 ">
            <div class="p-4 text-gray-800 rounded-lg shadow-md">
                <div class="mb-2">
                  <p class="mb-2 text-center text-slate-300 ">
                  {student.message}
                  </p>
                  <div class="flex flex-col items-center justify-center">
                    <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src={require(`./assets/${student.imageSrc}.jpeg`)} alt="img" class="object-cover object-center w-full h-full" />
                    </div>
                  <h5 class="font-bold text-[#e07c24]">{student.name}</h5>
                  <p class="text-sm text-gray-400">{student.designation}</p>
                </div>
                </div>
              </div>
        </div>

            ))

        }
        </Slider>
        
      </div>


    </div>



        </div>
    )
}

export default Testimonial;