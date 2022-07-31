import React,{useState, useEffect} from 'react';
import Animator from './components/Animator/Animator';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Course from './components/Courses/Course';
import Carousel from './components/Courses/Carousel';




const App = () => {
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
    },3500);

  },[]);

  
  return(

    <div className="App">

      {
        (loading)?
        (<Animator/>)
        
        :


        (

          <div className="content">
        <div className="bg-[#000000] font-[poppins] bg-gradient-to-tr from-[#000000] via-[#000000] to-[#ff943636]">
          <Navbar/>
          <Header/>
          <Course/>
          
        </div>
          
          </div>
        )
        
        
      }

      </div>
  )
}


export default App;