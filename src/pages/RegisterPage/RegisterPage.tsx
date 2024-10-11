import React from 'react'
import { Link } from 'react-router-dom'

const getGoogleAuthUrl = () => {
  const { VITE_GOOGLE_CLIENT_ID, VITE_REDIRECT_URI } = import.meta.env
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'
  const query = {
    client_id: VITE_GOOGLE_CLIENT_ID,
    redirect_uri: VITE_REDIRECT_URI,
    response_type: 'code',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(
      ' '
    ),
    prompt: 'consent',
    access_type: 'offline'
  }
  const queryString = new URLSearchParams(query).toString()
  return `${oauth2Endpoint}?${queryString}`
}

const RegisterPage = () => {
  return (
    <div>
      {' '}
      <div className='bg-orange'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-10 rounded bg-white shadow-sm'>
                <div className='text-2xl'>Đăng ký</div>
                <div className='mt-8'>
                  <input
                    type='name'
                    name='name'
                    placeholder='Nhập tên'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500'
                  />
                </div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Nhập email'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500'
                  />
                </div>
                <div className='mt-8'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Nhập password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500'
                  />
                </div>
              </form>
              <Link to={getGoogleAuthUrl()}>Đăng ký bằng Google</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
