import React from 'react'
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div>
      <div>
        For Guest Users Only
      <Outlet />
      </div>
    </div>
  )
}

export default GuestLayout
