import githubImage from "../images/github.png"
import maskdaoImage from "../images/maskdao.png"
import snapshotImage from "../images/mask_snapshot.png"
import * as React from "react"

// todo: color
export const JoinCommunity = () => {
  return (
    <div className="container">
      <p className="sm:leading-relaxed h2 font-semibold mx-auto text-center mt-8 min-w-280">
        Join the Mask Network Community
      </p>
      <p className="h5 text-center mt-8 px-6 text-black w-full mx-auto font-light">
        Mask Network is trusted and supported by an active community of users
        and contributors. Join us!
      </p>
      <div className="flex justify-between w-9/10 md:w-4/5 mx-auto font-semibold text-xl mt-8 md:mt-16 max-sm:text-sm px-2 mb-16 md:mb-44">
        <a
          href="https://github.com/DimensionDev"
          className="flex flex-col items-center w-24 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={githubImage} className="w-24 mb-3 max-sm:w-20" />
          <p className="icon-name text-center">GitHub</p>
        </a>
        <a
          href="https://we.mask.io/"
          className="flex flex-col items-center w-24 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={maskdaoImage} className="w-24 mb-3 max-sm:w-20" />
          <p className="icon-name text-center">MaskDAO</p>
        </a>
        <a
          href="https://snapshot.org/#/masknetwork.eth"
          className="flex flex-col items-center w-24 max-sm:w-24"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="" src={snapshotImage} className="w-24 mb-3 max-sm:w-20" />
          <p className="icon-name text-center">Mask Snapshot</p>
        </a>
      </div>
    </div>
  )
}
