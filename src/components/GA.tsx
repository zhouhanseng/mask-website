import { Script } from "gatsby";
import React from "react";

export function GA() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HH3XSGH6WT"
      />
      <Script id="ga">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5EXJ1HMZ97');
                `}
      </Script>
    </>
  );
}
