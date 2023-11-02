import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Profile from './components/Profile'
import Edit from './components/admin/profileComponents/Edit'

function App() {
  const [user, setUser] = useState({
    userEmail: '',
    userName: '',
    userAddress: '',
    number: '',
    userRole: '',
    profilePicture: '',
  });
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const sessionCookie = document.cookie.split(': ')
    .filter((cookie) => cookie.startsWith('name'));

    if(sessionCookie) {
      axios.get('http://localhost:5000/login').then((response) => {
          if(response.data.loggedIn == true) {
              setLoginStatus(response.data.loggedIn);
              setUser((prev) => ({
                ...prev,
                userEmail: response.data.user.userEmail,
                userName: response.data.user.userName,
                userAddress: response.data.user.userAddress,
                profilePicture: response.data.user.profilePicture
              }))
            }
      });
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
      <Router>
        <Routes>
          <Route path='/login' element={ 
            <Login 
              loginStatus={loginStatus}
              user={user}
              setLoginStatus={setLoginStatus}
              setUser={setUser}
            />
          }/>
          <Route path='/signup' element={
            <SignUp 
              loginStatus={loginStatus}
              user={user}
              setLoginStatus={setLoginStatus}
              setUser={setUser}
            />
          }/>
          <Route path='*' element={ 
            <Home 
              loginStatus={loginStatus}
              user={user}
              setLoginStatus={setLoginStatus}
              setUser={setUser}
            />
          }/>
          <Route path='/profile' element={ 
            <Profile 
              loginStatus={loginStatus}
              user={user}
              setLoginStatus={setLoginStatus}
              setUser={setUser}
            />
          }/>
          <Route path='/edit' element={ 
            <Edit 
              loginStatus={loginStatus}
              user={user}
              setLoginStatus={setLoginStatus}
              setUser={setUser}
            />
          }/>
        </Routes>
      </Router>
  )
}

export default App
