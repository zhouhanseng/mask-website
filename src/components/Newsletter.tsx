import * as React from "react"
import { useEffect, useState } from "react"

export const Newsletter = () => {
  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(window.location.pathname)
  }, [])
  return(
    [
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
        className="flex flex-row justify-between sm:flex-col md:flex-row sm:justify-center items-center sm:px-4 md:px-4 px-10 p-10 pb-7 bg-blue-100 sm:static flex-wrap box-shadow-news-letter-out">
        <div className="mr-7 mb-7 sm:w-full">
          <h3 className="h2 font-medium mb-4 sm:mb-0 sm:w-full sm:text-center text-left">
            MASK NETWORK Newsletter
          </h3>
          <p className="description-text text-gray-500 sm:w-full text-center text-left sm:font-light">
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
    )
  )
}
