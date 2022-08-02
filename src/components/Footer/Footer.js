import React from 'react';



const Footer = () => {
    return(

        <>

        <div className="Footer desktop:hidden laptop:hidden bg-slate-600/30 px-5 desktop:mt-48 laptop:mt-32 mt-24 pb-8 ">
             
             <div className="flex flex-col justify-center mb-10 pt-20">
             <div className="flex items-center justify-between mb-2 ">
                <img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo w-[120px]" />

            <div className="social flex">
            <a href="https://www.facebook.com/ineuronai" className="social-links w-[22px] mx-2">
                <img src={require('./assets/facebook.png')} alt="" />
            </a>
            <a href="" className="social-links w-[22px] mx-2 ">
                <img src={require('./assets/twitter.png')} alt="" />
            </a>
            <a href="" className="social-links w-[22px] mx-2 ">
                <img src={require('./assets/instagram (1).png')} alt="" />
            </a>
            <a href="" className="social-links w-[22px] mx-2 ">
                <img src={require('./assets/youtube.png')} alt="" />
            </a>
        </div>

            </div>

            <div className="line bg-orange-500 h-[3px] w-[350px]"></div>

             </div>
            
            <div className="contact">
                <div className="flex items-center my-7">
                    <img src={require('./assets/placeholder.png')} className="w-[25px] mr-8" alt="" />
                    <p className="addres text-[#ffffff] text-sm">17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli, Bengaluru, Karnataka 562129.</p>
                </div>
                <div className="flex items-center my-7">
                    <img src={require('./assets/email (1).png')} className="w-[25px] mr-8" alt="" />
                    <p className="email text-[#ffffff] text-sm"><span className='font-bold'>Email us:</span> contact@ineuron.ai</p>
                </div>
            </div>

            <img src={require('./assets/iso.png')} alt="" className="mt-12" />
            <p className="text-white font-bold mt-3">ISO 9001</p>

            <div>
                <h1 className="text-[#ffffff] text-[22px] mt-10 underline underline-offset-[10px] decoration-orange-500 font-bold">Company</h1>
                <ul className="list flex items-center flex-wrap mt-8 text-white list-none">
                    <li className="item w-[170px] my-1">About Us</li>
                    <li className="item w-[170px] my-1">Hack-A-Thon</li>
                    <li className="item w-[170px] my-1">JOb Guarantee</li>
                    <li className="item w-[170px] my-1">Privacy Policy</li>
                    <li className="item w-[170px] my-1">Contact Us</li>
                    <li className="item w-[170px] my-1">FAQs</li>
                    <li className="item w-[170px] my-1">Job Assistance</li>
                    <li className="item w-[200px] my-1">Terms and Conditions</li>
                </ul>
            </div>

            <div>
                <h1 className="text-[#ffffff] text-[22px] underline underline-offset-[10px] mt-10 decoration-orange-500 font-bold">Products</h1>
                <ul className="list flex flex-col items-start mt-8 text-white list-none">
                    <li className="item my-1">Job Portal</li>
                    <li className="item my-1">Internship Portal</li>
                    <li className="item my-1">Become an affilliate</li>
                    <li className="item my-1">Hall of Fame</li>
                    <li className="item my-1">InBlog</li>

                </ul>
            </div>

        </div>

        <div className="large-screen hidden bg-slate-600/30 desktop:flex laptop:flex items-start px-24">
            <div className="first mt-20 w-[34rem] desktop:mr-36 laptop:mr-28">

            <div className="flex flex-col justify-center mb-10">
             <div className="flex items-center justify-between mb-2 ">
                <img src={require('./assets/ineuron-logo-white.png')} alt="" className="logo w-[120px]" />

            <div className="social flex">
            <a href="https://www.facebook.com/ineuronai" className="social-links w-[22px] mx-2">
                <img src={require('./assets/facebook.png')} alt="" />
            </a>
            <a href="" className="social-links w-[26px] mx-2 ">
                <img src={require('./assets/twitter.png')} alt="" />
            </a>
            <a href="" className="social-links w-[26px] mx-2 ">
                <img src={require('./assets/instagram (1).png')} alt="" />
            </a>
            <a href="" className="social-links w-[26px] mx-2 ">
                <img src={require('./assets/youtube.png')} alt="" />
            </a>
        </div>

            </div>

            <div className="line bg-orange-500 h-[3px] w-[550px]"></div>

            <div className="contact">
                <div className="flex items-center my-7">
                    <img src={require('./assets/placeholder.png')} className="w-[28px] mr-8" alt="" />
                    <p className="addres text-[#ffffff] text-lg">17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli, Bengaluru, Karnataka 562129.</p>
                </div>
                <div className="flex items-center my-7">
                    <img src={require('./assets/email (1).png')} className="w-[28px] mr-8" alt="" />
                    <p className="email text-[#ffffff] text-lg"><span className='font-bold'>Email us:</span> contact@ineuron.ai</p>
                </div>
            </div>

            <img src={require('./assets/iso.png')} alt="" className="mt-12 w-[82px]" />
            <p className="text-white text-[22px] font-bold mt-3">ISO 9001</p>


             </div>

            </div>

            <div className="second mt-20 desktop:w-[30rem] laptop:w-[18rem]">
            <div>
                <h1 className="text-[#ffffff] text-[28px] underline underline-offset-[10px] decoration-orange-500 font-bold">Company</h1>
                <ul className="list flex items-center flex-wrap mt-8 text-white list-none">
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">About Us</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">Hack-A-Thon</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">JOb Guarantee</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">Privacy Policy</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">Contact Us</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">FAQs</li>
                    <li className="item w-[170px] my-1 hover:text-orange-400 cursor-pointer">Job Assistance</li>
                    <li className="item w-[200px] my-1 hover:text-orange-400 cursor-pointer">Terms and Conditions</li>
                </ul>
            </div>

            </div>

            <div className="third mt-20">
            <div>
                <h1 className="text-[#ffffff] text-[28px] underline underline-offset-[10px] decoration-orange-500 font-bold">Products</h1>
                <ul className="list flex flex-col items-start mt-8 text-white list-none">
                    <li className="item my-1 hover:text-orange-400 cursor-pointer">Job Portal</li>
                    <li className="item my-1 hover:text-orange-400 cursor-pointer">Internship Portal</li>
                    <li className="item my-1 hover:text-orange-400 cursor-pointer">Become an affilliate</li>
                    <li className="item my-1 hover:text-orange-400 cursor-pointer">Hall of Fame</li>
                    <li className="item my-1 hover:text-orange-400 cursor-pointer">InBlog</li>

                </ul>
            </div>

            </div>
        </div>

     


        </>
    )
}

export default Footer;