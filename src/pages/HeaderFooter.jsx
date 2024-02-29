import React from 'react';
import { Outlet } from 'react-router-dom'

const HeaderFooter = () => {
  return (
    <div>
        <header>
            <h2></h2>
        </header>
        <Outlet/>
        
    </div>
  )
}

export default HeaderFooter