import React from 'react';
const Animator = () => {
    return(
        <div className="animator">
            <img src={require('./assets/splashScreen.gif')} alt="" className="desktop:h-screen desktop:w-screen laptop:h-screen laptop:w-screen desktop:block laptop:block hidden"/>
            <img src={require('./assets/mobilesplashScreen.gif')} alt="" className="desktop:hidden laptop:hidden h-screen w-scrren" />
        </div>

    )
}

export default Animator;