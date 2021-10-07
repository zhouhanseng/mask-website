import * as React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import AboutImage from "../images/about.png";

// markup
const AnoutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="md:max-w-7xl w-full mx-auto md:flex hg:min-hg-h-about-content md:min-md-h-about-content my-16 max-sm:my-8 px-8">
        <div className="md:w-1/2 w-full md:py-4 hg:py-16 md:pr-8 flex flex-col md:mb-0 mb-8">
          <p className="hg:text-6xl text-6xl md:text-4xl max-sm:text-3xl  max-w-xss mb-4">
            About us
          </p>
          <p className="hg:text-2xl text-2xl md:text-xl max-sm:text-lg font-semibold max-w-sm mb-4">
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
        <img
          alt=""
          src={AboutImage}
          className="md:w-1/2 w-full h-auto md:min-w-about-image"
        />
      </div>
      <Footer />
    </main>
  );
};

export default AnoutPage;
