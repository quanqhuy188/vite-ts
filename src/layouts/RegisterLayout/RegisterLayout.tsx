import Footer from '@/components/Footer'
import RegisterHeader from '@/components/RegisterHeader'
import React, { ReactNode } from 'react'
interface Props {
  children?: ReactNode
}
const RegisterLayout = ({ children }: Props) => {
  return (
    <>
      <RegisterHeader />
      {children}
      <Footer />
    </>
  )
}

export default RegisterLayout
