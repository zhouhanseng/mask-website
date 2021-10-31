import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GetMaskButton } from "./GetMaskButton"
import StatueOfLibertySvg from "../images/statue_of_liberty.svg"

export const Banner = () => {
    return (
        <section className='container mx-auto mt-10'>
            <div className='flex justify-center'>
                <div className="flex-grow-7 p-20">
                  <div className="text-8xl leading-snug font-bold">
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
                <div className="flex-grow-5">
                    <StatueOfLibertySvg />
                </div>
            </div>
          <div className="rounded-xl flex justify-center" style={{ background: '#06018E' }}>
            <div className="text-blue-50 flex-grow-1 px-8 py-40 pl-24">
              <h2 className="text-6xl">What is Mask Network?</h2>
              <h5 className="text-3xl">The bridge that helps you seamlessly transit to web3.
                The defender to data autonomy.</h5>
            </div>
            <div className="flex-grow-1 py-4 pr-8">
              <StaticImage
                alt=""
                src="../images/banner_2.svg"
              />
            </div>

          </div>

        </section>
    )
}
