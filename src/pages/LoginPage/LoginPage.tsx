import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Nhập email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  placeholder='Nhập email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
