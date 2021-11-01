import * as React from "react"
import { GetMaskButton } from "./GetMaskButton"
import StatueOfLibertySvg from "../images/statue_of_liberty.svg"
import BannerSvg from "../images/banner_2.svg"

export const Banner = () => {
    return (
        <section className='container mx-auto mt-10'>
            <div className='flex justify-start relative items-center'>
                <div className="flex-grow p-8 z-10 lg:px-20 lg:p-20">
                  <div className="text-4xl leading-tight font-bold md:text-6xl lg:text-8xl">
                    <p>
                      The Portal to
                    </p>
                    <p>
                      the New,
                    </p>
                    <p>
                      Open Internet
                    </p>
                  </div>
                  <div className="my-8">
                    <GetMaskButton size='large' />
                  </div>
                </div>
                <div className="flex-grow-0 absolute bottom-0 right-10 w-32 md:relative md:w-80 z-0">
                    <StatueOfLibertySvg  />
                </div>
            </div>
          <div className="rounded-xl flex justify-center" style={{ background: '#06018E' }}>
            <div className="text-blue-50 flex-grow-1 px-8 py-40 pl-24">
              <h2 className="text-6xl font-bold leading-loose">What is Mask Network?</h2>
              <h5 className="text-3xl font-bold leading-normal">The bridge that helps you seamlessly transit to web3.
                The defender to data autonomy.</h5>
            </div>
            <div className="flex-grow-1 py-4 pr-8">
              <BannerSvg />
            </div>

          </div>

        </section>
    )
}
