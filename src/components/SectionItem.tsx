import * as React from "react"
import { memo, PropsWithChildren } from "react"

interface SectionItemProps extends PropsWithChildren<{}>{
  title: string
  subtitle: string
  mode: {
    row?: boolean,
    reverse?: boolean
  }
}

export const SectionItem = memo<SectionItemProps>(({ mode, children, subtitle, title }) => {
  const { row = true, reverse = false } = mode
  const flexRowStyle = row ? (reverse ? 'flex-row-reverse sm:flex-col md:flex-col' : 'flex-row sm:flex-col md:flex-col') : 'flex-col'
  return (
      <section className='container mx-auto mt-10 gray-background'>
        <div className={`flex ${flexRowStyle} justify-center items-center`}>
          <div className="flex-1">
            <div className='p-10'>
              <h2 className='h2'>
                {title}
              </h2>
              <p className="description-text">{subtitle}</p>
            </div>
          </div>
          <div className="flex-1 w-10/12">
            {children}
          </div>
        </div>
      </section>
  )
})