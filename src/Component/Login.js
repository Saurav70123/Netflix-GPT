import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <div className=' absolute text-white text-4xl font-bold'>
            <h1 className='px-10 py-10'>Unlimited movies, TV shows and more</h1>
        </div>
        <div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                alt="background-image" />
        </div>
    </div>
  )
}

export default Login