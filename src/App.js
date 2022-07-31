import React,{useState, useEffect} from 'react';
import Animator from './components/Animator/Animator';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';



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
        <div className="bg-[#000000] font-[poppins] h-screen w-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#ff943636]">
          <Navbar/>
          <Header/>
        </div>
        )
        
        
      }

      </div>
  )
}


export default App;