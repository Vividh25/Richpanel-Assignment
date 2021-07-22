import { render } from '@testing-library/react';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/Login.css';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  let fbContent;

  const responseFacebook = (response) => {
    console.log(response);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  if (isLoggedIn) {
    fbContent = null;
  } else {
    fbContent = (
      <FacebookLogin
        appId='352938649682255'
        autoLoad={true}
        fields='name,email,picture'
        onClick={handleLogin}
        callback={responseFacebook}
        cssClass='fb-login-btn'
      />
    );
  }
  return (
    <div className='container'>
      <h1>Welcome User!</h1>
      <h2>
        We provide you a helpdesk for your facebook account. Please login to
        access the helpdesk
      </h2>
      {fbContent}
    </div>
  );
}

export default Login;
