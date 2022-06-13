import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { iconStyle } from './NavigationStyles';
import { useCurrentUser } from "../../Helpers/userContext";
import { useEffect, useState } from 'react';

function Navbar() {
  const { currentUser, getUser } = useCurrentUser();

  useEffect(() => { 
    getUser();
    console.log(currentUser);
  }, []); 

  const logoutHandler = () => {
    localStorage.clear();
    getUser();
    // fali redirect
  };

  return (
    <div className='nav-bar'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='nav-logo'>
          <div className='nav-logo-baby'>Baby's</div>
          <div className='nav-logo-food'>food&nbsp;place</div>
        </div>
      </Link>
      <div className='nav-links'>
        <Link to='/breakfast'>Breakfast</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/brunch'>Brunch</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/lunch'>Lunch</Link>
        <FontAwesomeIcon icon={faCircle} color='#F0972A' style={iconStyle} />
        <Link to='/dinner'>Dinner</Link>
      </div>
      {currentUser ? (
          <button className='login-button' onClick={logoutHandler}>LOG OUT</button>) 
          : (      <div className='nav-login-buttons'>
        <Link to='/login'>
          <button className='login-button'>LOG IN</button>
        </Link>
        <div
          style={{
            marginLeft: '1rem',
            marginRight: '1rem',
            fontSize: '1.05rem',
            font: 'normal normal 900 16px/21px Roboto',
            color: '#f0972a',
          }}
        >
          or
        </div>
        <Link to='/register'>
          <button className='register-button'>CREATE ACCOUNT</button>
        </Link>
      </div>)}

    </div>
  );
}

export default Navbar;