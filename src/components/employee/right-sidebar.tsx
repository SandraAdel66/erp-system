'use client'

import Image from 'next/image'
import { Settings } from 'lucide-react'

export default function RightSidebar() {

  const today = new Date()

  const days = Array.from({ length: 4 }).map((_, i) => {
    const date = new Date()
    date.setDate(today.getDate() + (i - 1)) 

    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
    }
  })

  return (
    <aside className="w-[240px] flex-shrink-0 flex flex-col gap-6 bg-white border-l border-slate-200 p-4">


      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <Image
            src="/employee-avatar.png" 
            alt="Employee"
            width={48}
            height={48}
            className="rounded-full border border-slate-300"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-slate-800">Sandra Adel</p>
            <button className="text-xs text-blue-600 hover:underline text-left">
              View profile
            </button>
          </div>
        </div>

        <button className="p-2 rounded-md hover:bg-slate-100 transition">
          <Settings className="text-green-600 w-5 h-5" />
        </button>
      </div>

 
      <div className="bg-white p-4 shadow-sm ">
        <h4 className="font-semibold mb-3 text-slate-800">Calendar</h4>

        <div className="flex justify-between gap-2">
          {days.map((d, i) => (
            <div
              key={i}
              style={{ flex: '1' }}
              className="
                group
                flex flex-col items-center justify-center
                bg-blue-50 
                text-blue-700 
                rounded-xl 
                p-3 
                transition-all
                duration-150
                cursor-pointer
                hover:bg-[#4870DE]
              "
            >
              <span className="font-semibold group-hover:text-white">{d.day}</span>
              <span className="text-sm group-hover:text-white">{d.date}</span>
              <span className="text-xs group-hover:text-white">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

    </aside>
  )
}
