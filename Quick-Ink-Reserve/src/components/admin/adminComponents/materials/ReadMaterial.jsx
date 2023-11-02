import React from 'react'

function ReadMaterial({ loginStatus, material }) {
    if(loginStatus === false) {
        nav('/');
    }
    
  return (
    <div>
        <h1>Material</h1>
    </div>
  )
}

export default ReadMaterial