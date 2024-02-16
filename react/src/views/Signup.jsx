import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const onSubmit = () => {

  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit} action="" >
          <h1 className='title'> Sign Up For Free </h1>
          <input type="email" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Password Confirmation' />
          <button className='btn btn-block'>Sign Up</button>
          <p className='message'>
            Already Registered ? <Link to='/login'>Sign in </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
