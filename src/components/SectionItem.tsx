import * as React from "react"
import { memo } from "react"
import FiatSvg from "../images/fiat.svg"

export type SectionMode = 'row-left'  | 'row-right' | "col"

interface SectionItemProps {
  mode: SectionMode 
}

export const SectionItem = memo<SectionItemProps>(({ mode }) => {
  return (
      <section className='container mx-auto mt-10'>
        <div className={`flex ${mode.includes('row') ? 'flex-row' : 'flex-row-reverse'} justify-center items-center`}>
          <div className="flex-1">
            <div className='p-10'>
              <h2 className='h2'>
                Fiat On-ramp
              </h2>
              <p className="description-text">Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support. </p>
            </div>
          </div>
          <div className="flex-1">
            <FiatSvg />
          </div>
        </div>
      </section>
  )
})