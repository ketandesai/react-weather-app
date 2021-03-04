import React from 'react'
import { Footer } from '../footer/Footer'
import Header from '../header/Header'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
