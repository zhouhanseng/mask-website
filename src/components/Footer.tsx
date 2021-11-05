import * as React from "react"
import { Link } from "gatsby"
import logoWhiteImage from "../images/logo.png"

import iconDiscordImage from "../images/icon_discord.png"
import iconFacebookImage from "../images/icon_facebook.png"
import iconGithubImage from "../images/icon_github.png"
import iconRedditImage from "../images/icon_reddit.png"
import iconTelegramImage from "../images/icon_telegram.png"
import iconTwitterImage from "../images/icon_twitter.png"
import { Newsletter } from "./Newsletter"
import { useEffect, useState } from "react"

export const Footer = () => {
  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  const isHideNewsletter = [
    "/about",
    "/about/",
    "/mask-website/about",
    "/mask-website/about/",
    "/download-links",
    "/download-links/",
    "/mask-website/download-links",
    "/mask-website/download-links/",
    "/faq",
    "/faq/",
    "/mask-website/faq",
    "/mask-website/faq/",
  ].includes(path)

  return (
    <>
      <div className="md:hidden min-lg:hidden">
        <Newsletter/>
      </div>
      <footer className="bg-blue-1000 flex justify-center flex-grow-0">
        <div className="container px-10 md:px-8 sm:px-6">
          <div className="relative -top-20 sm:hidden">
            <Newsletter/>
          </div>
          <div
            className={`py-4 ${isHideNewsletter ? 'pt-20 md:pt-12 sm:pt-8' : ''} w-full mx-auto grid grid-cols-4 max-md:grid-cols-1 relative px-0`}>
            <div
              className="py-1 md:flex md:flex-col md:justify-between max-md:border-b border-b-0 border-r max-md:border-r-0 sm:pb-12 md:pb-12 border-gray-100 border-opacity-25 min-lg:pr-8 min-lg:mr-8">
              <div className='pb-8 sm:pt-8 sm:pb-0'>
                <img alt="" src={logoWhiteImage} className="w-32 md:mb-0 mb-8"/>
              </div>
              <div className="pr-2">
                <p className="text-white opacity-80 text-base mb-4 md:max-w-xs w-full">
                  Mask Network is developed and maintained by Dimension.{" "}
                </p>
                <p className="text-white opacity-80 text-base md:mb-4 mb-8 md:max-w-xs w-full">
                  Mask Network is a free and open source software.
                </p>
              </div>
            </div>
            <div
              className="flex pl-4 sm:pl-0 md:pl-0 md:mt-0 max-md:mt-4 col-span-2">
              <div className="flex justify-start whitespace-nowrap max-md:mr-8 sm:mt-8 md:mt-8">
                <div className="py-1 flex flex-col">
                  <p className="text-2xl text-white mb-6">About</p>
                  <div
                    className="grid grid-cols-1 gap-x-16 gap-x-4 gap-y-10 sm:gap-y-5 max-md:gap-x-0 max-md:gap-y-1 text-base max-md::text-sm">
                    <a
                      href="https://dimensiondev.github.io/Mask-VI/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-white opacity-80"
                    >
                      Brand Guide
                    </a>
                    <a
                      href="mailto:info@dimension.im"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-white opacity-80"
                    >
                      Contact Us
                    </a>
                    <a
                      href="https://legal.mask.io/maskbook/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base text-white opacity-80"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col justify-start max-w-lg whitespace-nowrap md:ml-12 ml-16 sm:ml-0 md:ml-0 sm:mt-8 md:mt-8">
                <div className="py-1 flex flex-col">
                  <p className="text-2xl text-white mb-6">Navigate</p>
                  <div
                    className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-1 gap-y-10 sm:gap-y-5 max-md:gap-x-0 max-md:gap-y-1 text-base max-md::text-sm">
                    <a
                      href="https://news.mask.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white opacity-80"
                    >
                      News
                    </a>
                    <Link className="text-base text-white opacity-80" to="/faq">
                      FAQs
                    </Link>
                    <a
                      href="https://github.com/DimensionDev"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white opacity-80"
                    >
                      Source Code
                    </a>
                    <Link className="text-white opacity-80" to="/faq">
                      Help
                    </Link>
                    <Link className="text-white opacity-80" to="/faq?type=tutorials">
                      Tutorials
                    </Link>
                    <a
                      href='https://github.com/DimensionDev/Maskbook/issues?q=is:issue+is:open+label:"Bounty:+Open"'
                      target="_blank"
                      rel="noreferrer"
                      className="text-white opacity-80"
                    >
                      Bounty Program
                    </a>
                    <a
                      href="https://www.linkedin.com/company/masknetwork/jobs/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white opacity-80"
                    >
                      Join Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col mt-8 justify-start w-full pb-12 min-lg:mt-0 min-lg:ml-20">
              <div className="py-1 flex flex-col">
                <p className="text-2xl text-white min-lg:mb-6">Community</p>
                <div
                  className="grid min-lg:grid-cols-3 grid-cols-6 gap-x-4 max-md:gap-x-2 w-72 mt-6 min-lg:w-36 gap-y-4 min-lg:mt-0">
                  <a
                    href="https://twitter.com/realMaskNetwork"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto twitter"
                  >
                    <img alt="" src={iconTwitterImage} className="cursor-pointer"/>
                  </a>
                  <a
                    href="https://t.me/maskbook_group#telegram"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto telegram"
                  >
                    <img alt="" src={iconTelegramImage} className="cursor-pointer"/>
                  </a>
                  <a
                    href="https://discord.gg/4SVXvj7"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto discord"
                  >
                    <img alt="" src={iconDiscordImage} className="cursor-pointer"/>
                  </a>
                  <a
                    href="https://www.facebook.com/masknetwork"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto facebook"
                  >
                    <img alt="" src={iconFacebookImage} className="cursor-pointer"/>
                  </a>
                  <a
                    href="https://www.reddit.com/r/MaskNetwork/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto reddit"
                  >
                    <img alt="" src={iconRedditImage} className="cursor-pointer"/>
                  </a>
                  <a
                    href="https://github.com/DimensionDev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Goto github"
                  >
                    <img alt="" src={iconGithubImage} className="cursor-pointer"/>
                  </a>
                  <div className="opacity-0 hidden hg:flex">
                    placeholder never show
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-0 min-lg:mt-12">
            <p className="text-white text-base max-w-xs max-md:mb-0">
            </p>
            <p
              className="flex justify-between w-full text-white text-center sm:text-left py-4 border-t border-gray-100 border-opacity-25 mx-auto sm:flex-col sm:items-center sm:justify-center">
              <span>
              © 2018-2021 Mask.io
              </span>
              <span className='text-center'>
              I thought what I'd do was, I'd pretend I was one of those deaf-mutes.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>

  )
}
