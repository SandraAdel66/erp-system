'use client'

import Image, { StaticImageData } from 'next/image'
import NewIssue from './icons/NewIssue.png'
import ReportIssue from './icons/ReportIssue.png'
import RequestTimeOff from './icons/RequestTimeOff.png'

interface QuickActionItem {
  title: string
  icon: StaticImageData
}

const quickActions: QuickActionItem[] = [
  { title: 'New Issue', icon: NewIssue },
  { title: 'Report Issue', icon: ReportIssue },
  { title: 'Request Time Off', icon: RequestTimeOff },
]

export default function QuickActions() {
  return (
    <section className="bg-quickActionsBg rounded-2xl p-8 pt-15 shadow-sm border border-slate-200 overflow-visible">
      <h3 className="text-center text-2xl font-semibold mb-20">Quick Actions</h3>

      {/* All buttons in a row */}
      <div className="flex justify-between items-end max-w-3xl mx-auto mt-12 h-18">
        {quickActions.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div
              role="button"
              tabIndex={0}
              className="relative w-60 h-16 bg-white rounded-2xl shadow-md border border-slate-200 cursor-pointer transition hover:shadow-lg overflow-visible"
            >
              {/* Icon - bottom of image aligns with button bottom */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-24 z-10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title below the button */}
            <span className="mt-3 text-lg font-medium text-blue-500 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
