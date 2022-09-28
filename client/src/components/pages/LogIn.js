import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!validateEmail(email)) {
      setValidEmail('Email is invalid');
    } else {
      setValidEmail('');
    }
  }, [email]);

  useEffect(() => {
    if (!message) {
      setErrorMessage('Message is required');
    } else {
      setErrorMessage('');
    }
  }, [message])

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      setErrorMessage('Message is required');
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h1 className='text-5xl mb-12 text-yellow-100 text-center'>Contact</h1>
      <form className="flex flex-col bg-yellow-50 p-8">
        <div className='mb-8'>
          <p className='text-emerald-800 text-3xl mb-4'> Name </p>
          <input
            className='w-1/2 p-2 ring'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />

        </div>
        <div className='mb-8'>
          <p className='text-emerald-800 text-3xl mb-4'> Email </p>
          <input
            className='w-1/2 p-2 ring-2 mb-2'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          {validEmail && email && (
            <div className='text-red-400 text-lg'>
              <p className="error-text">{validEmail}</p>
            </div>
          )}
        </div>

        <div className='mb-8'>
          <p className='text-emerald-800 text-3xl mb-4'> Message </p>
          <textarea
            className='w-full p-2 ring'
            rows={5}
            cols={50}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
          {errorMessage && (
            <div className='text-red-400 text-lg'>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>

        <button className='block w-1/2 text-yellow-100 text-2xl bg-emerald-600 hover:bg-emerald-700 transition-all ring-2 rounded-lg ring-emerald-500 p-4 mx-auto' type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}
