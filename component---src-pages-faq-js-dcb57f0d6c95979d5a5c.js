(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[329],{8163:function(e,t,a){var o;"undefined"!=typeof self&&self,o=function(e){return function(e){var t={};function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=a(1),i=(o=n)&&o.__esModule?o:{default:o};t.default=i.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(2),s=(o=r)&&o.__esModule?o:{default:o},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.smoothScroll=a.smoothScroll.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){a(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var a=function(){return 0};void 0!==this.props.offset&&(a=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var o=e.currentTarget.getAttribute("href").slice(1),n=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:n-a(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}(e,["offset"]));return s.default.createElement("a",n({},t,{onClick:this.smoothScroll}))}}]),t}(r.Component);t.default=l},function(t,a){t.exports=e},function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,o=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||s,scrollIntoView:o.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var a=p(this),o=a.getBoundingClientRect(),i=this.getBoundingClientRect();a!==t.body?(u.call(this,a,a.scrollLeft+i.left-o.left,a.scrollTop+i.top-o.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,a){var o=e.getComputedStyle(t,null)["overflow"+a];return"auto"===o||"scroll"===o}function f(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function p(e){var a;do{a=(e=e.parentNode)===t.body}while(!1===a&&!1===f(e));return a=null,e}function d(t){var a,o,n,r,s=(i()-t.startTime)/468;r=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*r)),o=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(d.bind(e,t))}function u(a,o,r){var l,c,m,f,p=i();a===t.body?(l=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=n.scroll):(l=a,c=a.scrollLeft,m=a.scrollTop,f=s),d({scrollable:l,method:f,startTime:p,startX:c,startY:m,x:o,y:r})}}}}()}])},e.exports=o(a(7294))},6277:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var o=a(7294),n=a(2359),i=a(8163),r=a.n(i),s=a(9339),l=a(5345),c=a(8908),m=a.p+"static/faq_sm-ebeb50314cddff62fe35c3bbef028e74.png",f=a.p+"static/faq_one-6fe3c81735fbc47a62cc62c631cc471d.png",p=a.p+"static/faq_two-c66853ae52fac0691e6f739f973fae73.png",d=a.p+"static/faq_three-1eab83cd9922a8c9ab6d037cc4d1df6e.png",u=a.p+"static/faq_four-149089df7b9719999753b4336578c869.png",h=a.p+"static/faq_five-a6ceb4488426e98c5147c531d8054cf3.png",b=a.p+"static/faq_six-e2c1340b30de58b9c3a7ed77a911a65b.png",w=a.p+"static/faq_seven-44011da6ee5c7476a2ec128478850823.png",k=a.p+"static/faq_eight-6dabfb25fba8fef94124b9731f0df193.png",g=a.p+"static/faq_nine-f660ad18edddbe49fa1b2dc95b9e5b8c.png",y=a.p+"static/faq_ten-84e8f613d179ccbb575fa996b8a8fb1e.png";function x(e){return o.createElement(o.Fragment,null,o.createElement("div",{className:"flex items-center mb-8 "+(0===e.i?"":"mt-20 max-sm:mt-10")},o.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),o.createElement("p",{className:"text-4xl max-sm:text-3xl ml-2 font-bold"},e.content.title)),o.createElement("div",{className:"ml-14 max-sm:ml-2 flex flex-col"},e.content.contents.map((function(e){return o.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"font-semibold mb-8 text-xl max-sm:text-base max-sm:font-light max-sm:mb-4 max-sm:underline"},e.text)}))))}function v(e){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current&&new IntersectionObserver((function(a){t.current&&a[0]&&a[0].isIntersecting&&e.action(t.current.textContent)}),{root:document,rootMargin:"0px",threshold:1}).observe(t.current)}),[]),o.createElement(o.Fragment,null,o.createElement("div",{ref:t,className:"flex items-center mb-12 max-sm:mb-6 "+(0===e.i?"":"mt-24")},o.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),o.createElement("p",{className:"text-4xl max-sm:text-3xl ml-2 font-bold",id:e.content.title},e.content.title)),o.createElement("div",{className:"pl-14 max-sm:pl-3"},e.content.contents.map((function(e,t){return o.createElement("div",{key:t.toString()},o.createElement(A,{show:e.show,title:e.title,content:e.content}))}))))}function S(e){return o.createElement(r(),{offset:"100",href:"#"+e.title,className:"whitespace-nowrap py-3 px-4 border-l-4 "+(e.title===e.current?" border-gray-800 text-gray-800":"border-gray-300 text-gray-300 font-light"),onClick:e.action},e.title)}function A(e){var t=(0,o.useState)(Boolean(e.show)),a=t[0],n=t[1];return o.createElement("div",{className:"mb-10 max-sm:mb-6"},o.createElement("p",{className:"text-2xl max-sm:text-xl mb-4 max-sm:mb-2 cursor-pointer flex items-center",onClick:function(){return n(!a)}},o.createElement("img",{src:a?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAJCAYAAABnoO8WAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgB7dXRCQAgDAPRRBSDUzqam9YpRBr6Nriv45A2jHFqBXxFg7kKzK4Cs7MP7AQO/nu2qguYwAQ/lq1vywAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAYAAACS0bM2AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dqxDYJAFMbx7x0McEqpFk4gI7iBbqSjOIJOoCM4AiNgYSc8sdPiupPkI9+vAy4h/+JCwjvDSGJc1EWBOvW8657ndoCMSowkBNvDcUiviDcgb1zAhCmOleJYKY6V4lgpjpXiWCmOleJYKY6V4lhNOu7n116Mq31R9BH/0NsG5snHAa9dVS0eyMi+L6rZ8jrc2WIitOdYKY6V4lj9fOfc/QILDf7BvTZLz+eG8dbZzbKOsAwjmc+Xx+Flyflc15frtm0aZKQ9x0pxrBTHSnGsFMdKcawUx0pxrBTHSnGsFMdqtKP31nd3D+UpvSLvsfuPN4JMLGszk7b1AAAAAElFTkSuQmCC",className:"pr-4 w-8"}),o.createElement("span",null,e.title)),a?o.createElement("p",{className:"text-gray-500 text-xl max-sm:text-sm relative left-8 max-sm:left-7 max-xsm:left-6 w-5/6",dangerouslySetInnerHTML:{__html:e.content}}):null)}function T(e){return e.innerWidth}var E=function(){var e=(0,o.useState)(0),t=e[0],i=e[1],r=(0,s.Wd)("type",s.Zp),A=r[0],E=r[1],C=[{title:"Getting Started",image:f,contents:[{title:"Where can I use Mask Network ?",show:!0,content:"Mask Network is now available on Facebook and Twitter. We will support more platforms in the future."},{title:"How to install Mask Network?",content:"Go to <a class='font-semibold' href='https://mask.io/download'>https://mask.io/download</a> to install Mask Network directly. You can also install through the Chrome Web Store, Google Play Store(beta), or the Apple App Store(beta)."},{title:"How to create a persona?",content:"Mask Network will automatically remind your own persona since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”"},{title:"Explain like I am a nerd.",content:"Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares K via ECIES over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes CT on Facebook and synchronizes K.Bob over GUN. Bob can then retrieve K to decrypt M."}]},{title:"Trade and Swaps",image:p,contents:[{title:"Where does the crypto price info come from?",content:"Mask Network support price chart by both CoinMarketCap and CoinGecko. You can change the data source on “Settings.”"},{title:"What is swap and where can I find it?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p>"},{title:"Does Mask Network charge a fee on swap?",content:"No, the swap on Mask Network is provided by Uniswap, we don’t charge any fee."}]},{title:"File Service",image:d,contents:[{title:"How to use the file service on Mask Network?",content:"Mask Network is now available on Twitter, Facebook, and Minds.com. We will support more platforms in the future."},{title:"Who will be able to see the uploaded file?",content:"You can set & make amend to the recipients of the designated file."},{title:"Can my friends see the uploaded file?",content:"Only our users with the proper permission can see this file."}]},{title:"About ITO",image:u,contents:[{title:"What is ITO ( Initial Twitter Offering )?",content:'<p class="max-sm:mb-2 mb-3">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p><p class="max-sm:mb-2 mb-3">Please follow our Blog (<a class="font-semibold" href="http://masknetwork.medium.com/">http://masknetwork.medium.com/</a>) or Telegram Channel for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>'},{title:"How do I prepare for participating in an ITO?",content:"<p class='max-sm:mb-2 mb-3'>First of all, please make sure that you have installed the Mask extension.</p><p class='max-sm:mb-2 mb-3'>Second, please create a Mask account and bind the Twitter account. Remember to back up the Mask account~</p> <p class='max-sm:mb-2 mb-3'>Third, import or bind a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support binding MetaMask and WalletConnect.</p><p class='max-sm:mb-2 mb-3'>Fourth, prepare enough token for purchasing, and a sufficient gas fee. We encrypt the ITO page in Tweet, and the entrance can only be seen when ITO starts.</p>"},{title:"How much can I purchase a single ITO address?",content:"According to the different rules of each ITO, the purchase limit of a single address is different. Mask Network also plans to support various forms of auctions and joint curves to serve various ITO needs."},{title:"What should I do if gas is very high?",content:"The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer 2 solution."},{title:"If an ITO is on BSC/Polygon, but my $MASK is on Ethereum, will I be able to meet the snapshot requirement?",content:"Don’t worry about it, it doesn’t matter which chain your asset is on."}]},{title:"Wallet",image:h,contents:[{title:"How to create a wallet?",content:"Mask Network will automatically create an Ethereum wallet for you since you create a persona. Or you can create a wallet on the dashboard. Click “Enter the Dashboard” -> “Wallets” -> “Create Wallet” -> Enter Wallet Name -> Choose “ I confirm that i need to create a wallet” -> Click “Import” -> Done!"},{title:"I already have a wallet…?",content:"<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'> The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), and Polygon (Matic).</p>"}]},{title:"Lucky Drop",image:b,contents:[{title:"How to view the history and detail information of the received Lucky Drop?",content:'Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.'},{title:"How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",content:'The current Red Packet is valid for 24 hours. After 24 hours, if the Red Packet has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.'},{title:"Will Mask Network be banned (by Twitter)?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check this article for the technical details about Mask Network.</p>"},{title:"My Twitter account is banned :( What happens to my assets now?",content:"Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine."},{title:"Where can I trade $MASK?",content:"You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges."}]}],M=[{title:"Setup",image:w,contents:[{text:"Installation & set up",link:"https://realmaskbook.notion.site/Installation-set-up-8147f28c734c4038b4cba4b6ba9a772f"},{text:"Setting up your wallet (Support MetaMask and WalletConnect)",link:"https://realmaskbook.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-3f39ee5c74a6403f88d8af3e2a76ec0b"},{text:"Manually update the Mask Network plugin",link:"https://realmaskbook.notion.site/Manually-update-the-Mask-Network-plugin-1e87e9d71ae64e5c8cf0d6bc11f57fb3"},{text:"Back up your private key",link:"https://realmaskbook.notion.site/Back-up-your-private-key-ad5909e3cf8849bdb7e5989d8487e8d3"}]},{title:"Switch Network & Cross Chain",image:f,contents:[{text:"Switch network between ETH, BSC, and Polygon",link:"https://realmaskbook.notion.site/Switch-network-between-ETH-BSC-and-Polygon-30501828d0db492fb2ee9b9f9822c178"},{text:"Use the Polygon Bridge to convert from Ethereum Mainnet and Polygon",link:"https://realmaskbook.notion.site/Use-the-Polygon-Bridge-to-convert-from-Ethereum-Mainnet-and-Polygon-81c0a8268b064c80aec2ee226871741a"},{text:"Convert $MASK from ERC20 to BEP20",link:"https://realmaskbook.notion.site/Convert-MASK-from-ERC20-to-BEP20-7e982c16c1404d758a3c94b1e5ee9ca2"}]},{title:"Features",image:k,contents:[{text:"Send an Encrypted Text",link:"https://realmaskbook.notion.site/Send-an-Encrypted-Text-365ba60facbd4d069ea6ca72ec16a154"},{text:"Purchase NFTs or place a bid  for NFTs  via OpenSea or Rarible on Twitter",link:"https://realmaskbook.notion.site/Purchase-NFTs-or-place-a-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-912fea95f84b49bfb481ef152e1423c1"},{text:"Send a Lucky Drop (Support ETH, BSC and Polygon)",link:"https://realmaskbook.notion.site/Send-a-Red-Packet-Support-ETH-BSC-and-Polygon-d5a3c18464474a07bd07581c31cea7f7"},{text:"Use File Service via Arweave (IPFS, SIA, Swarm soon)",link:"https://realmaskbook.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-e5d60b122fda433e921ddad242b58c05"},{text:"Cast a Snapshot vote",link:"https://realmaskbook.notion.site/Cast-a-Snapshot-vote-4ba42d31d00647d782ff431e8fe986d2"},{text:"Launch an ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)",link:"https://realmaskbook.notion.site/Launch-an-ITO-Initial-Twitter-Offering-Support-ETH-BSC-and-Polygon-eb242a21eaff4c48ba4c1445bd7b9482"},{text:"Claim tokens (from ITO/Airdrop) (Support ETH only, Polygon soon)",link:"https://realmaskbook.notion.site/Claim-tokens-from-ITO-Airdrop-Support-ETH-only-Polygon-soon-90ccfe8812ea4e44bb998921b80aaa80"},{text:"Check cryptocurrency info on social media (CoinGecko, CoinMarketCap, Uniswap Info)",link:"https://realmaskbook.notion.site/Check-cryptocurrency-info-on-social-media-CoinGecko-CoinMarketCap-Uniswap-Info-f086e3aa33964f74a84cf2033dfcba9c"},{text:"Participate in ITO (Initial Twitter Offering) (Support ETH, BSC and Polygon)",link:"https://realmaskbook.notion.site/Participate-in-ITO-Initial-Twitter-Offering-Support-ETH-BSC-and-Polygon-16de37684de54f36923f55158159a11c"},{text:"Display the NFTs you own on your Twitter profile",link:"https://realmaskbook.notion.site/Display-the-NFTs-you-own-on-your-Twitter-profile-1cdcf9569ecc4e98987e05c88e0d2deb"}]},{title:"$Mask Token Related",image:g,contents:[{text:"How to add $MASK liquidity to PancakeSwap",link:"https://realmaskbook.notion.site/How-to-add-MASK-liquidity-to-PancakeSwap-1af175c8a4524e3d8c3ec988480c4674"}]},{title:"Third-party Plugins",image:y,contents:[{text:"See the latest offer of a Tweet NFT by Valuables Plugin",link:"https://realmaskbook.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-ce284e61c703460096f1b10f8e378685"},{text:"Make a quick Gitcoin Grant donation using the Mask extension",link:"https://realmaskbook.notion.site/Make-a-quick-Gitcoin-Grant-donation-using-the-Mask-extension-89bdc65b8fa34c05a3707792ea05e52f"},{text:"Trade tokens via Uniswap, Sushi, 0x,Balancer, Dodo,etc. on Twitter (Support ETH, BSC and Polygon)",link:"https://realmaskbook.notion.site/Trade-tokens-via-Uniswap-Sushi-0x-etc-on-Twitter-Support-ETH-BSC-and-Polygon-803402915c2c4148a269dc88faf0306e"},{text:"Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)",link:"https://realmaskbook.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-6b80d1ee67b64987aa54be7cb4fd9983"},{text:"Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)",link:"https://realmaskbook.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-4e4954ffc592452b9c8903babec47959"},{text:"Copy your favourite manager's portfolio via dHEDGE on Twitter (ETH and Polygon)",link:"https://realmaskbook.notion.site/Copy-your-favourite-manager-s-portfolio-via-dHEDGE-on-Twitter-ETH-and-Polygon-eab2d7120a094834b24d86b1a54aa1c7"}]}],N=(0,o.useState)(C[0].title),O=N[0],B=N[1];return(0,o.useEffect)((function(){function e(){i(T(window))}return i(T(window)),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),o.createElement("main",null,o.createElement(l.w,null),t?o.createElement(o.Fragment,null,t>850?o.createElement("div",{className:"w-full flex"},o.createElement("div",{className:"hidden md:w-1/2 md:flex justify-center items-center bg-gray-200 hg:text-5xl md:text-4xl"},o.createElement("p",{className:"w-4/5"},"How can we help you?")),t>850?o.createElement(n.S,{alt:"",src:"../images/faq.png",className:"w-full md:w-1/2 h-auto",__imageData:a(1676)}):o.createElement(n.S,{alt:"",src:"../images/faq_sm.png",className:"w-full md:w-1/2 h-auto",__imageData:a(7197)})):o.createElement("img",{alt:"",src:m,className:"w-full"}),o.createElement("div",{className:"w-full md:mb-32 mb-16 hg:mt-36 md:mt-24 mt-16"},o.createElement("div",{className:"w-full max-w-7xl mx-auto px-5 flex justify-between"},o.createElement("div",{className:"w-full md:pr-8 pl-4"},o.createElement("p",{className:"cursor-pointer mb-14 max-sm:mb-6",onClick:function(){E("faq"!==A&&A?"faq":"tutorials")}},o.createElement("span",{className:"faq"!==A&&A?"text-5xl text-gray-500 max-sm:text-3xl":"text-6xl font-semibold max-sm:text-4xl"},"FAQ\\"),o.createElement("span",{className:"faq"!==A&&A?"text-6xl font-semibold max-sm:text-4xl":"text-5xl text-gray-500 max-sm:text-3xl"},"Tutorial")),"tutorials"===A?o.createElement("div",{className:"max-w-4xl my-24 max-sm:my-8"},o.createElement("p",{className:"text-4xl mb-8 px-4 md:px-0 max-sm:text-2xl max-sm:mb-4 max-sm:px-0"},"An (In)Complete Guide to Mask Network"),o.createElement("p",{className:"text-xl text-gray-500 px-4 md:px-0 max-sm:text-base max-sm:px-0"},"Mask Network is the portal to the new internet that connects mainstream Web 2.0 social media with the open, decentralized Web 3.0. Through our browser extension, users could get a glimpse of the decentralized application world. You can easily make borderless cryptocurrency transfers, decentralized file storage and sharing, display and trade NFTs, participate in various DeFi projects, and vote on governance proposals. Do everything in a Web 3.0 way, but on top of Web 2.0.")):null,"tutorials"===A?M.map((function(e,t){return o.createElement("div",{key:t.toString(),className:"max-w-3xl"},o.createElement(x,{i:t,content:e}))})):null,"faq"!==A&&A?null:C.map((function(e,t){return o.createElement("div",{key:t.toString(),className:"max-w-3xl"},o.createElement(v,{contents:C,i:t,content:e,action:function(e){return B(e)}}))}))),"faq"!==A&&A?null:o.createElement("div",null,o.createElement("div",{className:"sticky top-16 md:flex hidden flex-col"},C.map((function(e,t){return o.createElement(S,{title:e.title,i:t.toString(),current:O,action:function(){return B(e.title)}})}))))))):o.createElement("div",{className:"h-screen"}),o.createElement(c.$,null))}},7197:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/mask-website/static/b3ccb9f000a16513bc65d605447849d6/db2aa/faq_sm.png","srcSet":"/mask-website/static/b3ccb9f000a16513bc65d605447849d6/42b7f/faq_sm.png 768w,\\n/mask-website/static/b3ccb9f000a16513bc65d605447849d6/cf816/faq_sm.png 1536w,\\n/mask-website/static/b3ccb9f000a16513bc65d605447849d6/db2aa/faq_sm.png 3072w","sizes":"(min-width: 3072px) 3072px, 100vw"},"sources":[{"srcSet":"/mask-website/static/b3ccb9f000a16513bc65d605447849d6/60f2f/faq_sm.webp 768w,\\n/mask-website/static/b3ccb9f000a16513bc65d605447849d6/f968c/faq_sm.webp 1536w,\\n/mask-website/static/b3ccb9f000a16513bc65d605447849d6/fefaf/faq_sm.webp 3072w","type":"image/webp","sizes":"(min-width: 3072px) 3072px, 100vw"}]},"width":3072,"height":1796}')},1676:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/mask-website/static/d8ec1c7a106ce037212c79f29821c072/ca9cb/faq.png","srcSet":"/mask-website/static/d8ec1c7a106ce037212c79f29821c072/f93f0/faq.png 960w,\\n/mask-website/static/d8ec1c7a106ce037212c79f29821c072/5eaa3/faq.png 1921w,\\n/mask-website/static/d8ec1c7a106ce037212c79f29821c072/ca9cb/faq.png 3841w","sizes":"(min-width: 3841px) 3841px, 100vw"},"sources":[{"srcSet":"/mask-website/static/d8ec1c7a106ce037212c79f29821c072/d42ef/faq.webp 960w,\\n/mask-website/static/d8ec1c7a106ce037212c79f29821c072/8df77/faq.webp 1921w,\\n/mask-website/static/d8ec1c7a106ce037212c79f29821c072/51031/faq.webp 3841w","type":"image/webp","sizes":"(min-width: 3841px) 3841px, 100vw"}]},"width":3841,"height":2244}')}}]);
//# sourceMappingURL=component---src-pages-faq-js-dcb57f0d6c95979d5a5c.js.map