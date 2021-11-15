import githubImage from "../images/github.png";
import maskdaoImage from "../images/image_maskdao.png";
import maskImage from "../images/image_mask.png";
import * as React from "react";

// todo: color
export const JoinCommunity = () => {
  return (
    <div className="container mx-auto mt-16">
      <h2 className="sm:leading-relaxed h2 font-semibold mx-auto text-center mt-8 min-w-280">
        Join the Mask Network Community
      </h2>
      <p className="description-text text-center m4-8 px-6 w-full mx-auto font-light">
        Mask Network is trusted and supported by an active community of users
        and contributors. Join us!
      </p>
      <div className="flex justify-between min-lg:w-2/3 md:w-4/5 mx-auto font-semibold text-xl mt-16 max-md:text-sm px-2 mb-16">
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
          <img alt="" src={maskImage} className="w-24 mb-3 max-sm:w-20" />
          <p className="icon-name text-center">Mask</p>
        </a>
      </div>
    </div>
  );
};
