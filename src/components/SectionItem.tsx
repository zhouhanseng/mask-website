import * as React from "react"
import { memo, ReactNode } from "react"
import arrowSvg from "../images/outsvg/arrow.svg"

interface SectionItemProps {
  title: string
  subtitle: ReactNode
  url: string
  mode: {
    row?: boolean,
    reverse?: boolean
  },
  link: string
}

export const SectionItem = memo<SectionItemProps>(({ mode, subtitle, title, url, link }) => {
  const { row = true, reverse = false } = mode
  const flexRowStyle = row ? (reverse ? 'flex-row-reverse sm:flex-col md:flex-col' : 'flex-row sm:flex-col md:flex-col') : 'flex-col'
  return (
    <section className='container mx-auto mt-10 min-h-screen-2/5 flex items-center justify-center'>
      <div className={`flex ${flexRowStyle} justify-center items-center max-md:items-start w-full`}>
        <div className={`flex-1 sm:flex-grow-0 ${row ? '' : 'w-full'}`}>
          <div className={`p-10 sm:p-4 max-md:w-full max-md:flex max-md:justify-start max-md:flex-col`}>
            <h2 className={`h2 max-md:text-left ${row ? 'text-left' : 'text-center'}`}>
              {title}
            </h2>
            <p className={`description-text whitespace-pre-wrap ${!row ? 'min-lg:text-center' : ''}`}>
              {subtitle}
              <a href={link} className="inline-block ml-2 leading-tight relative"
                 target="_blank"
                 rel="noreferrer"
                 style={{ width: "1.4em", top: '0.2rem' }}>
                <img src={arrowSvg} className='w-6' alt={`got ${title} page`}/>
              </a>
            </p>
          </div>
        </div>
        <div className={`flex-1 sm:flex-grow max-md:w-full ${row ? '' : 'w-full pt-24'} max-md:pt-16`}>
          <div className="w-10/12 min-lg:max-w-800 mx-auto">
            <img src={url} alt={title}/>
          </div>
        </div>
      </div>
    </section>
  )
})