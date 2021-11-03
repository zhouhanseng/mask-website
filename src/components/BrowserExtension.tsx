import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const config = [
  {
    title: "Add Mask to your browser",
    svg: <StaticImage
      alt="Add Mask to your browse icon"
      src={'../images/add_mask_to_browser.png'}
      placeholder="none"
    />
  },
  {
    title: "Login in with Mask ID and connect wallet",
    svg: <StaticImage
      alt="Login in with Mask ID and connect wallet icon"
      src={'../images/login_with_mask.png'}
      placeholder="none"
    />
  },
  {
    title: "Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0",
    svg: <StaticImage
      alt="Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0 icon"
      src={'../images/enjoy_web3.png'}
      placeholder="none"
    />
  },
]

export const BrowserExtension = () => {
  return (
    <div className="mt-16 p-10 sm:p-4">
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
                <div className="flex justify-center w-24 sm:w-1/3">
                  {x.svg}
                </div>
                <p className='py-4 text-gray-description sm:w-2/3 sm:pl-2'>{x.title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}