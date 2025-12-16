import type { ReactNode } from "react"

import Sidebar from "@/components/employee/sidebar"
import RightSidebar from "@/components/employee/right-sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-screen bg-slate-50 flex overflow-hidden">
      
      <div className="w-64 border-r border-slate-200 bg-white">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto px-6 py-6">
        {children}
      </main>

      <div className="w-72 border-l border-slate-200 bg-white">
        <RightSidebar />
      </div>

    </div>
  )
}
