import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export const Partner = () => {
  return (
    <div className="container pb-48 sm:pb-4 mx-auto">
      <h2 className="h2 py-10 sm:pt-6 font-semibold text-center">
        Partners & Supporters
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-16 md:gap-x-4 sm:gap-x-2 w-10/12 md:grid-cols-5 md:max-w-6xl md:w-11/12 gap-y-8 mx-auto hoverFilter md:gap-y-8 sm:gap-y-4 justify-center">
        <a
          href="https://www.binance.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Binance"
            src={"../images/partner_binance.png"}
            placeholder="none"
          />
        </a>

        <a
          href="https://bootcamp.web3.foundation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Web3 Bootcamp"
            src={"../images/partner_web30.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.okx.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="OKX"
            src={"../images/partner_okx.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.hashkey.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Hashkey"
            src={"../images/partner_hashkey.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://makerdao.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="MakerDAO"
            src={"../images/partner_maker.png"}
            placeholder="none"
          />
        </a>
        <a href="https://gitcoin.co/" target="_blank" rel="noopener noreferrer">
          <StaticImage
            alt="GitCoin"
            src={"../images/partner_gitcoin.png"}
            placeholder="none"
          />
        </a>
        <a href="https://gun.eco/" target="_blank" rel="noopener noreferrer">
          <StaticImage
            alt="GUN"
            src={"../images/partner_gun.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.arweave.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt=""
            src={"../images/partner_arweave.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://chainide.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="ChainIDE"
            src={"../images/partner_chainide.png"}
            placeholder="none"
          />
        </a>
        <a href="https://dcg.co/" target="_blank" rel="noopener noreferrer">
          <StaticImage
            alt="DCG"
            src={"../images/partner_dcg.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.alameda-research.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Alameda Research"
            src={"../images/partner_alameda.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://filecoin.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Filecoin"
            src={"../images/partner_filecoin.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://protocol.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Protocol Labs"
            src={"../images/partner_protocol.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://nymtech.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="NYM"
            src={"../images/partner_nym.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.animocabrands.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Animoca Brands"
            src={"../images/partner_animocabrands.png"}
            placeholder="none"
          />
        </a>
        <a
          href="https://www.dwf-labs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage
            alt="Animoca Brands"
            src={"../images/partner_dwf.png"}
            placeholder="none"
          />
        </a>
      </div>
    </div>
  );
};
