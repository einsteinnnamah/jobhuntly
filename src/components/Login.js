import React from 'react'
import logo from '../img/Logo.png'
import banner_img from '../img/BG.png'
function Login() {
return (
  <div className='container p-10'>
    
    <header className=''>
      <img src={logo}></img>
    </header>
    
    
    <div className='banner'>
      <div className='banner-img'>
        <img src={banner_img}></img>
      </div>
      <div className='banner-text'>

      </div>
    </div>
     
  </div>
  )
}

export default Login