import React from”react”
import {Script} from "gatsby"

export function GA() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HH3XSGH6WT" />
            <Script id="ga">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HH3XSGH6WT');
                `}
            </Script>
        </>
    )
}