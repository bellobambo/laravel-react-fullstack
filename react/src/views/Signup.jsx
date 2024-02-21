import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value
    };

    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        setToken(data.token);
        setUser(data.user);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit} action="" >
          <h1 className='title'> Sign Up For Free </h1>
          {errors && (
            <div className='alert'>
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key]}</p>
              ))}
            </div>
          )}
          <input ref={nameRef} placeholder='Full Name' />
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <input ref={passwordConfirmationRef} type="password" placeholder='Password Confirmation' />
          <button className='btn btn-block'>Sign Up</button>
          <p className='message'>
            Already Registered ? <Link to='/login'>Sign in </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
