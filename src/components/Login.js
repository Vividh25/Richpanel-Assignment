import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import '../styles/Login.css';
import AgentScreen from './AgentScreen';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  const [accessToken, setAccessToken] = useState('');
  let fbContent;

  const responseFacebook = (response) => {
    console.log(response);
    setAccessToken(response.accessToken);
    setEmail(response.email);
    setIsLoggedIn(true);
    setName(response.name);
    setUserID(response.id);
    setPicture(response.picture.data.url);
  };

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  if (isLoggedIn) {
    return (
      <AgentScreen
        picture={picture}
        name={name}
        accessToken={accessToken}
        userID={userID}
      />
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId='352938649682255'
        autoLoad={false}
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
