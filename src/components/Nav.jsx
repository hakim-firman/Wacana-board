import React from 'react'
import { Assets } from '../assets/Assets'

export const Nav = () => {
  return (
    <div className='w-full px-[3rem] bg-neutral-900 p-5 border-black border-b-8'>
        <img src={Assets.logo_full_dark} className='w-40' alt="" />
    </div>
  )
}
