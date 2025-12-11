'use client'

import Image from 'next/image'
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
    <section className="bg-quickActionsBg rounded-2xl p-8 shadow-sm border border-slate-200">
      <h3 className="text-center text-2xl font-semibold mb-8">Quick Actions</h3>

      {/* All buttons in a row */}
      <div className="flex justify-between max-w-3xl mx-auto">
        {quickActions.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center w-60 h-48 bg-white rounded-2xl shadow-md border border-slate-200 cursor-pointer transition hover:shadow-lg"
          >
            {/* Icon */}
            <div className="relative w-20 h-20 flex items-center justify-center mb-3">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <span className="text-lg font-medium text-blue-500 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
