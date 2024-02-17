import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const onSubmit = () => {

  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit} action="" >
          <h1 className='title'> Login into your account </h1>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button className='btn btn-block'>Login</button>
          <p className='message'>
            Not Registered ? <Link to='/signup'>Signup</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
