import { Navbar } from "./Navbar"

import React from "react"
import { Footer } from "./Footer"
import { Cookies } from "./Cookies"
export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main className='flex justify-center flex-col items-center'>
        {children}
      </main>
      <Footer />
      <Cookies />
    </div>
  )
}
