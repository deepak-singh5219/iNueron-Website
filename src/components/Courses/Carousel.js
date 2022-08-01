import React,{useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css';


const Carousel = () => {
    const [sliderRef, setSliderRef] = useState(null)

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

    const CourseCards = [
        {
          imageSrc:1,

          title: 'Digital Marketting',
    
          name: 'Amresh Bharti',
          price: 11000,
        },
        {
            imageSrc:2,
          title: 'DSA for FAANG',
    
          name: 'Anurag Tiwari',
          price: 10000,
        },
        {
            imageSrc:3,
          title: 'Digital Marketting Batch 2',
    
          name: 'Amresh Bharti',
          price: 13000,
        },
        {
            imageSrc:4,
          title: 'Advanced Facebook Marketting',
    
          name: 'Amresh Bharti',
          price: 3000,
        },
        {
        imageSrc:6,
          title: 'Learn JavaScript',
    
          name: 'Hitesh Choudhary',
          price: 5000,
        }
      ]
    
    return(
        <div className="corousel z-0">

            <Slider {...settings}>
           {
            CourseCards.map((card)=>
           (

        <div className="card flex flex-col px-4 py-3 bg-[#7A7B7F]/10 justify-between items-start h-[29rem] rounded-lg my-4">
               <div className="upper mb-8">
               <img src={require(`./assets/${card.imageSrc}.jpg`)} alt="" className="desktop:w-[350px] rounded-[15px] py-3 "/>
                <h1 className="title text-[#ffffff] font-bold text-[1.35rem] py-2">{card.title}</h1>
               </div>
                <div className="bottom">
                <p className="name text-[#cec9c4] text-[18px]">{card.name}</p>
                <p className="price text-[#ffffff] flex items-center font-bold text-[1.25rem] py-3"><img src={require('./assets/rupee.png')} className="w-[1.25rem]" alt="" /> {card.price}</p>
                <button className="buy h-[3rem] mb-2 transition ease-in-out delay-150 laptop:text-sm hover:-translate-y-1 hover:scale-110 duration-300  text-[16px] w-[6rem] laptop:w-[8rem] border-2 border-[#E07C24] text-[#ffffff] text-lg hover: hover:cursor-pointer flex justify-center items-center bg-[#E07C24] rounded-lg desktop:w-[9rem]">Buy Now</button>
                </div>
                </div>

            )
            )
             }

            </Slider>

        </div>

    )
}

export default Carousel;