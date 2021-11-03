import React from "react"
import LoginWithMaskSvg from '../images/login_with_mask.svg'
import AddMaskToBrowserSvg from '../images/add_mask_to_browser.svg'
import EnjoyWeb3Svg from '../images/enjoy_web3.svg'

const config = [
  {
    title: "Add Mask to your browser",
    svg: <div className="w-full">
      <AddMaskToBrowserSvg />
    </div>
  },
  {
    title: "Login in with Mask ID and connect wallet",
    svg: <div className="w-full">
      <LoginWithMaskSvg />
    </div>
  },
  {
    title: "Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0",
    svg: <div className="w-full">
      <EnjoyWeb3Svg />
    </div>
  },
]

export const BrowserExtension = () => {
  return (
    <div className="mt-12 p-10 sm:p-4">
      <div>
        <h2 className='h2 text-center'>
          Browser Extension
        </h2>
      </div>
      <div className={`flex justify-between items-start pt-8 gap-x-2 sm:flex-col`}>
        {
          config.map(x =>{
            return (
              <div key={x.title} className="flex-grow-0 w-1/3 items-center flex flex-col justify-center sm:flex-row sm:w-full sm:pt-6">
                <div className="flex justify-center w-24 sm:w-1/4 max-w-nav-logo">
                  {x.svg}
                </div>
                <p className='py-4 text-gray-description sm:w-2/3 sm:pl-6'>{x.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}