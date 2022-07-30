import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return(
    <div className="bg-[#000000] font-[poppins] h-screen w-screen bg-gradient-to-br from-[#000000] via-[#000000] to-[#ff943636]">
      <Navbar/>
      <Header/>
    </div>
  )
}


export default App;