'use client'
import { useState } from 'react'
function UserProfile() {
  const { userid, nombre } = JSON.parse(sessionStorage.getItem('user')) || {}

  return (
    <>
      {userid && (
        <div className='flex justify-between items-center p-3 bg-primary'>
          <p className='text-white'>Bienvenido {nombre}</p>
          <a
            href='/logout'
            className='text-white'
          >
            Cerrar Sesión
          </a>
        </div>
      )}
    </>
  )
}
export default UserProfile
