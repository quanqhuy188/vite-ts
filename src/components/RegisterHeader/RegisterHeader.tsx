import ShopeeSvg from '@/assets/icon/ShopeeSvg'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px4'>
        <nav className='flex items-end'>
          <Link to={'/'}>
            <ShopeeSvg />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>Đăng ký</div>
        </nav>
      </div>
    </header>
  )
}

export default RegisterHeader
