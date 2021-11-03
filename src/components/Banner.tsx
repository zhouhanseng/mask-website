import * as React from "react"
import { GetMaskButton } from "./GetMaskButton"
import StatueOfLibertySvg from "../images/statue_of_liberty.svg"
import WhatSvg from "../images/what.svg"
import { useEffect, useRef, useState } from "react"
import Typed from 'typed.js'

export const Banner = () => {
  const ref = useRef(null)
  const [tyepingFinish, setTypingFinish] = useState(false)

  useEffect(() => {
    if (!ref || !ref.current) return
    const options = {
      strings: ['The Portal to <br> the New, <br>Open Internet.'],
      typeSpeed: 200,
      backSpeed: 200,
      onComplete: () => setTypingFinish(true)
    }

    const typed = new Typed('.element', options )
    typed.start()

    return () => {
      typed.destroy()
      setTypingFinish(false)
    }
  }, [ref])


    return (
        <section className='container pt-16 flex items-center pb-20 md:pb-10 sm:pb-4' style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className='w-full'>
            <div className='flex justify-start relative items-center'>
              <div className="flex-grow z-10 p-10 md:p-4 sm:p-4">
                <div className="text-black-main sm:text-4xl leading-tight md:text-6xl text-8xl font-bold w-full">
                  <span  className='element' ref={ref} />
                  <p className="invisible h-0">
                    Open Internet
                  </p>
                </div>
                <div className="py-8">
                  {
                    !tyepingFinish && <div style={{ height: '80px' }}/>
                  }
                  {
                    tyepingFinish && <GetMaskButton size='large' />
                  }
                </div>
              </div>
              <div className="flex-grow-0 min-lg:px-10 min-lg:w-1/3 sm:absolute bottom-0 sm:right-10 sm:w-40 relative md-80 z-0">
                <StatueOfLibertySvg  />
              </div>
            </div>
            <div className="rounded-xl flex justify-center items-center relative p-2 sm:pb-6" style={{ background: '#06018E' }}>
              <div className="text-blue-50 flex-grow sm:px-4 sm:py-2 md:px-8 md:py-6 pl-24 py-40 z-10">
                <h2 className="h2 text-blue-50 md:pb-10 font-extrabold">What is Mask Network?</h2>
                <h5 className="h5 text-blue-50">The bridge that helps you seamlessly transit to web3.
                  The defender to data autonomy.</h5>
              </div>
              <div className="flex-grow-0 sm:absolute bottom-0 right-6 sm:w-28 relative w-8/12 z-0">
                <WhatSvg />
              </div>
            </div>
          </div>
        </section>
    )
}
