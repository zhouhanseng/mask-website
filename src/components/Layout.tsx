import { Navbar } from "./Navbar"

import React, { useEffect } from "react"
import { Footer } from "./Footer"
export default function Layout({ children }: any) {
  useEffect(() => {
    if (!window) return
    alert(window.innerWidth)
    alert(window.innerHeight)
  }, [])
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex justify-center flex-col items-center flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
