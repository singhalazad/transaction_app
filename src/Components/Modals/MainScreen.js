import React from 'react'
import Navbar from './Navbar'
import PageTop from './PageTop'

function MainScreen({role}) {
  return (
    <div>
        <div className="flex ">
          <Navbar role={role}/>
          <PageTop/>
          
        </div>
    </div>
  )
}

export default MainScreen