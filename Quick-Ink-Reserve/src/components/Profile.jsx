import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './admin/UI/Navbar';

import { BsBoxArrowLeft } from 'react-icons/bs';
import { FaCircleUser, FaUserTie } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';
import { RiUserFollowFill } from 'react-icons/ri';

function Profile({ loginStatus, user, setLoginStatus, setUser }) {
  console.log(user);
  const nav = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:5000/profile')
      .then((response) => {
        if (response.data.loggedIn === true) {
          setUser(response.data.user);
          setLoginStatus(response.data.loggedIn);
        } else {
            nav('/login');
        }
      })
      .catch((error) => {
        nav('/login')
      });
  }, [nav]);

  const handleReturn  = (e) => {
    e.preventDefault();
    if(user.userRole === 'ADMIN') {
      nav('/admin', {
        loginStatus: loginStatus,
        user: user,
        setLoginStatus: setLoginStatus,
        setUser: setUser
      });
    } else {
      nav('/', {
        loginStatus: loginStatus,
        user: user,
        setLoginStatus: setLoginStatus,
        setUser: setUser
      });
    }
  }

  return (
    <>
      <div className='flex w-full m-auto h-full bg-gray-700 overflow-x-hidden'>
        <Navbar 
          profilePicture={user.profilePicture} 
          nav={nav} 
          user={user} 
          loginStatus={loginStatus}
          setLoginStatus={setLoginStatus}
          setUser={setUser}
          name={'profile'}
        />  
        <div className='w-2/3 m-auto flex flex-col justify-start items-center gap-10'>
          <h1>Account Settings</h1>
          <div className='flex flex-col gap-5 w-2/3 items-center justify-start'>
            <div className='w-full'>
              <h1 className='text-left text-3xl mb-3 flex items-center gap-3'><FaCircleUser /> Username</h1>
              <div className='text-center bg-gray-900 p-5 w-full rounded-md '>{user.userName}</div>
            </div>
            <div className='w-full'>
              <h1 className='text-left text-3xl mb-3 flex items-center gap-3'><MdMarkEmailRead />Email Address</h1>
              <div className='text-center bg-gray-900 p-5 w-full rounded-md '>{user.userEmail}</div>
            </div>
            <div className='w-full'>
              <h1 className='text-left text-3xl mb-3 flex items-center gap-3'>{ user.userRole === 'ADMIN' ? <FaUserTie /> : <RiUserFollowFill />}Role</h1>
              <div className='text-center bg-gray-900 p-5 w-full rounded-md '>{user.userRole}</div>
            </div>
          </div>
          <button onClick={handleReturn} 
            className='flex gap-2 items-center transition ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-100 hover:bg-green-600 hover:text-white duration-300 p-5 rounded-lg text-gray-900'>
              <BsBoxArrowLeft />
              Back to Dashboard
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;