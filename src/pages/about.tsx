import * as React from "react"
import { SEO } from "../components/SEO"
import aboutSvg from "../images/outsvg/about.svg"

import Layout from "../components/Layout"

// markup
const AnoutPage = () => {
  return (
    <Layout>
      <SEO title="About us - Mask Network"/>
      <div className='container my-16 sm:my-10 animate__animated animate__fadeIn'>
        <div className='flex max-md:flex-col justify-center items-center'>
          <div className="flex-grow min-lg:w-1/2 max-md:w-10/12">
            <p className="h2">
              About us
            </p>
            <p className="hg:text-2xl text-2xl md:text-xl max-sm:text-lg font-semibold max-w-sm mb-4 md:mb-8">
              Mask Network aims to bridge the Web 2.0 users to Web 3.0.
            </p>
            <p className="hg:text-xl text-xl md:text-base max-sm:text-sm text-gray-400 max-w-lg">
              By bringing the amazing decentralized application ecosystem onto
              traditional social networks, the Mask extension provides a
              decentralized option for features Web 2.0 users are familiar with.
              Users could enjoy secure, decentralized social messaging, payment
              networks, file storage, and file sharing without leaving the
              mainstream social media networks. Users could get a glimpse of the
              magic of the Web 3.0 world in an easy and effortless way.We at Mask
              Network are strong believers in the ownership economy. People should
              own what they produce, their data, their attention, and the virtual
              space they choose to contribute to. And we hereby invite everyone
              who sees this message to join us in the course of regaining control
              of our personal data.
            </p>
          </div>
          <div className="flex-grow w-1/2 sm:w-full max-md:pb-28 max-md:mt-16">
            <div className="w-full animate__animated animate__fadeIn">
              <img src={aboutSvg} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AnoutPage
