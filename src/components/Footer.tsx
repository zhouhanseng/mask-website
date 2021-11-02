import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import logoWhiteImage from "../images/logo.png"

import iconDiscordImage from "../images/icon_discord.png"
import iconFacebookImage from "../images/icon_facebook.png"
import iconGithubImage from "../images/icon_github.png"
import iconRedditImage from "../images/icon_reddit.png"
import iconTelegramImage from "../images/icon_telegram.png"
import iconTwitterImage from "../images/icon_twitter.png"

export const Footer = () => {
  const [path, setPath] = useState("")

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  return (
    <footer className="bg-blue-1000 flex justify-center">
      <div className="container px-10">
        {[
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
        ].includes(path) ? null : (
          <div
            className="flex flex-row justify-between sm:flex-col md:flex-row sm:justify-center items-center sm:px-4 md:px-4 px-10 p-10 pb-7 bg-blue-100 relative -top-20 sm:top-0 sm:static flex-wrap box-shadow-news-letter-out">
            <div className="mr-7 mb-7 max-sm:w-full">
              <p className="text-3xl font-medium mb-4 max-sm:text-2xl max-sm:w-full max-sm:text-center text-left">
                Subscribe Newsletter
              </p>
              <p className="text-lg text-gray-500 max-sm:w-full max-sm:text-center text-left">
                Follow us for more information about MASK
              </p>
            </div>
            <form
              className="flex max-md:justify-center justify-start max-md:w-full filter drop-shadow-news-letter min-lg:min-w-2/5"
              name="subscription"
              method="post"
              target="_blank"
              noValidate
              action="https://dimension.us20.list-manage.com/subscribe/post?u=bd44f8df98ab3d8daf8bbe020&amp;id=d23c8870f6"
            >
              <input
                name="EMAIL"
                className="outline-none flex-grow md:text-base text-sm max-sm:pl-2 bg-white py-4 pl-5 rounded-none"
                type="email"
                placeholder="Please input your email address"
              />
              <button
                type="submit"
                className="py-4 md:px-5 px-3 text-sm md:text-base bg-blue-600 text-white flex-grow-0"
              >
                Submit
              </button>
            </form>
          </div>
        )}
        <div
          className="py-4 w-full mx-auto grid grid-cols-4 max-md:grid-cols-1 relative px-0">
          <div
            className="py-1 md:flex md:flex-col md:justify-between max-md:border-b border-b-0 border-r max-md:border-r-0 sm:pb-12 md:pb-12 border-gray-100 border-opacity-25 min-lg:pr-8 min-lg:mr-8">
            <img alt="" src={logoWhiteImage} className="w-32 md:mb-0 mb-8"/>
            <div className="pr-2">
              <p className="text-white opacity-80 text-base mb-4 md:max-w-xs w-full">
                Mask Network is developed and maintained by Dimension.{" "}
              </p>
              <p className="text-white opacity-80 text-base md:mb-4 mb-8 md:max-w-xs w-full">
                Mask Network is a free and open source software.
              </p>
              <p className="text-white text-base max-w-xs max-md:mb-0">
                © 2018-2021 Mask.io
              </p>
            </div>
          </div>
          <div
            className="flex pl-4 sm:pl-0 md:pl-0 md:mt-0 max-md:mt-4 col-span-2">
            <div className="flex justify-center whitespace-nowrap max-md:mr-8 sm:mt-8 md:mt-8">
              <div className="py-1 flex flex-col">
                <p className="text-2xl text-white mb-6">About</p>
                <div
                  className="grid grid-cols-1 gap-x-16 gap-x-4 gap-y-10 sm:gap-y-5 max-md:gap-x-0 max-md:gap-y-4 text-base max-md::text-sm">
                  <a
                    href="https://dimensiondev.github.io/Maskbook-VI/"
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
              className="flex flex-col justify-between max-w-lg whitespace-nowrap md:ml-12 ml-16 sm:ml-0 md:ml-0 sm:mt-8 md:mt-8">
              <div className="py-1 flex flex-col">
                <p className="text-2xl text-white mb-6">Navigate</p>
                <div
                  className="grid grid-cols-3 sm:grid-cols-1 gap-x-16 gap-x-4 gap-y-10 sm:gap-y-5 max-md:gap-x-0 max-md:gap-y-4 text-base max-md::text-sm">
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
            className="py-1 flex flex-col mt-8 justify-between w-full pb-12 min-lg:mt-0">
            <p className="text-2xl text-white">Community</p>
            <div className="grid grid-cols-6 gap-x-4 max-md:gap-x-2 w-72 mt-6">
              <a
                href="https://twitter.com/realMaskNetwork"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconTwitterImage} className="cursor-pointer"/>
              </a>
              <a
                href="https://t.me/maskbook_group#telegram"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconTelegramImage} className="cursor-pointer"/>
              </a>
              <a
                href="https://discord.gg/4SVXvj7"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconDiscordImage} className="cursor-pointer"/>
              </a>
              <a
                href="https://www.facebook.com/masknetwork"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconFacebookImage} className="cursor-pointer"/>
              </a>
              <a
                href="https://www.reddit.com/r/MaskNetwork/"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconRedditImage} className="cursor-pointer"/>
              </a>
              <a
                href="https://github.com/DimensionDev"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={iconGithubImage} className="cursor-pointer"/>
              </a>
              <div className="opacity-0 hidden hg:flex">
                placeholder never show
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-0 min-lg:mt-12">
          <p
            className="w-full text-white text-center sm:text-left py-4 border-t border-gray-100 border-opacity-25 mx-auto">
            I thought what I'd do was, I'd pretend I was one of those deaf-mutes.
          </p>
        </div>
      </div>
    </footer>
  )
}
