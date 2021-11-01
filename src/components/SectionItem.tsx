import * as React from "react"
import { memo } from "react"
import FiatSvg from "../images/fiat.svg"

export type SectionMode = 'row-left'  | 'row-right' | "col"

interface SectionItemProps {
  mode: {
    row?: boolean,
    reverse?: boolean
  }
}

export const SectionItem = memo<SectionItemProps>(({ mode }) => {
  const { row = true, reverse = false } = mode
  const flexRowStyle = row ? (reverse ? 'flex-row-reverse sm:flex-col md:flex-col' : 'flex-row sm:flex-col md:flex-col') : 'flex-col'
  return (
      <section className='container mx-auto mt-10'>
        <div className={`flex ${flexRowStyle} justify-center items-center`}>
          <div className="flex-1">
            <div className='p-10'>
              <h2 className='h2'>
                Fiat On-ramp
              </h2>
              <p className="description-text">Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support. </p>
            </div>
          </div>
          <div className="flex-1 w-10/12">
            <FiatSvg />
          </div>
        </div>
      </section>
  )
})