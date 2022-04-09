import React from 'react'
import logo from '../img/Logo.png'
import {FcGoogle} from 'react-icons/fc'
import background from '../img/background.png'
function Login() {
return (
  <div className='login_text mt-10 flex flex-col justify-center items-center '>
    <div  className='authentation md:flex'> 
    <div className='background'>
    <img  className=' ' src={background}></img>
    </div>
    <div className='full_auth'>
    <header className=' flex flex-col justify-center items-center'>
      <div className='logo'>
      <img src={logo}></img>
      </div>
      
    <div className='btn mt-20 capitalize font-semibold'>
    <span className='btn1'>job Seeker</span>
    <span>Company</span>
    </div>

    <div className=' welcome_text dark_text mt-20 text-4xl' >
    <h1 className='text-center'>Get more <br />opportunities</h1>
    </div>
    </header>

  <div className='mt-10'>
    <button className='auth-btn'>
    <div className='auth-icon mr-5'>
     <FcGoogle />
     </div>
     Sign Up with Google
    </button>
    <h2 className=' auth-email-text text-center mt-10'>Or sign up with email</h2>
  
  </div>


<div className='email-auth mt-10 flex flex-col justify-center items-center'>
 

  <form className='email_opt-auth-info'>
    <label className='mb-2'>
      Full Name
    </label><br />
    <input placeholder='Enter your full name' type="text"></input>
    
  </form>

  <form className='email_opt-auth-info mt-10'>
    <label className='mb-2'>
      Email address
    </label><br />
    <input placeholder='Enter email address' type="emailaddress"></input>
  </form>

  <form className='email_opt-auth-info mt-10'>
    <label className='mb-2'>
      Password
    </label><br />
    <input placeholder='Enter email address' type="password"></input>
  </form>

<button  className='submit-btn mt-10'>Continue</button>

  <p className='opt-login mt-10'>Already have an account? <span>Login</span></p>

  <p className=' opt-login mt-5'>
  By clicking 'Continue', you acknowledge that you <br />have read and accept the <span>Terms of Service</span> and <br /><span>Privacy Policy.</span>
  </p>
</div>

    </div>
    </div>
    
  </div>
  )
}

export default Login 