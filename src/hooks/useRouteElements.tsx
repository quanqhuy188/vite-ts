import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import ProductPage from '@/pages/ProductPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import RegisterLayout from '@/layouts/RegisterLayout'

export function useRouteElements() {
  const element = useRoutes([
    {
      path: '/',
      element: <ProductPage />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <LoginPage />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <RegisterPage />
        </RegisterLayout>
      )
    }
  ])

  return element
}
