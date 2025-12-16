'use client'

import Header  from "@/components/employee/header"

import WelcomeBanner from '@/components/employee/welcome-banner'
import QuickActions from '@/components/employee/quick-actions'
import TicketsTable from '@/components/employee/ticket-table'
import TicketStatsCards from '@/components/employee/ticket-stats-cards'
export default function HomePage() {
  return (
    <div className="flex h-screen bg-slate-100">
      

  <main className="flex-1  p-6 space-y-8">
    <Header />
    <WelcomeBanner name="Sandra" />
    <QuickActions />
    <TicketStatsCards />
    <TicketsTable />
  </main>

</div>


      
  )
}
