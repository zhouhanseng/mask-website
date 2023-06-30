import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";
import buryPointTrigger from "../utils/gtag";

const config = [
  {
    title: (
      <Link
        onClick={() => buryPointTrigger("event", "getmask")}
        to="/download-links"
      >
        Install the Mask Extension
      </Link>
    ),
    svg: (
      <StaticImage
        alt="Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0 icon"
        src={"../images/add_mask_to_browser.png"}
        placeholder="none"
        className="w-full"
      />
    ),
  },
  {
    title: "Login with Mask ID and connect your wallet",
    svg: (
      <StaticImage
        alt="Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0 icon"
        src={"../images/login_with_mask.png"}
        placeholder="none"
        className="w-full"
      />
    ),
  },
  {
    title: "Use familiar Web 2.0 sites, enhanced with Web3 integrations",
    svg: (
      <StaticImage
        alt="Enjoy your familiar Web 2.0 sites turbocharged by Web 3.0 icon"
        src={"../images/enjoy_web3.png"}
        placeholder="none"
        className="w-full"
      />
    ),
  },
];

export const BrowserExtension = () => {
  return (
    <div className="mt-12 p-10 sm:p-4">
      <div>
        <h2 className="h2 text-center">Using Mask Network</h2>
      </div>
      <div
        className={`flex justify-between items-start pt-8 gap-x-2 sm:flex-col animate__animated animate__fadeIn`}
      >
        {config.map((x, i) => {
          return (
            <div
              key={i}
              className="flex-grow-0 w-1/3 items-center flex flex-col justify-center sm:flex-row sm:w-full sm:pt-6"
            >
              <div className="flex justify-center w-24 sm:w-1/4 max-w-nav-logo">
                {x.svg}
              </div>
              <p className="py-4 text-gray-description sm:w-2/3 sm:pl-6">
                {x.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
