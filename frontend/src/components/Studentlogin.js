import React from 'react'

const Studentlogin = () => {
  return (
    <div className='flex bg-black text-white'>
        <div className='flex-1 mt-60 ml-48'>
        <p className='text-4xl font-bold'> STUDENT LOGIN </p>
        <p className='m-5 ml-0 text-gray-400'>Enter your login credentials</p>

        <form>
            <input className='my-5 w-96  bg-black text-white border-b-2 border-gray-600  ' type='text' placeholder='Name'/><br/>
            <input className='my-9 w-96 bg-black text-white border-b-2 border-gray-600' type='password' placeholder='Password'/><br/>
            <a className='text-gray-400 text-xl mt-10' href='#'>Forgot password ?</a><br/>
            <button className="my-10 bg-custom-blue w-96 h-10 text-xl rounded-lg" style={{ backgroundColor: "#925FE2" }}>Login</button>

        </form>

        <div className='flex mt-20 mb-24 '>
            <p className='text-gray-400'>Don't have an account?</p>
            <button className='ml-2     bg-gray-500 rounded-sm w-52 h-10 -mt-2'>Create an account</button>
        </div>
        </div>



        <div className='flex-2 ' style={{ backgroundColor: "#9C6FE4" }} >
            <div className='mr-32'>
            {/* <img  className='mt-48 w-full  '  src='/images/login-image2.png'/> */}

            <img  className='mt-48 w-full  '  src='https://studentcover.in/login-illustration.svg'/>
            {/* <img  className='mt-48 w-full  '  src='/images/login-image.png'/> */}

            </div>
        </div>
    
    </div>
  ) 
}

export default Studentlogin
