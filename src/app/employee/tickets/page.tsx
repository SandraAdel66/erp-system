
import RightSidebar from '@/components/employee/right-sidebar'
import Header  from "@/components/employee/header"
import { TicketsBanner } from "@/components/employee/tickets/tickets-banner"
import { TicketFilters } from "@/components/employee/tickets/ticket-filters"
import { TicketGrid } from "@/components/employee/tickets/ticket-grid"

export default function TicketsPage() {
  return (
    <div className="flex min-h-screen bg-background">

      <main className="flex-1">
        <Header />

        <div className="p-6 md:p-8 space-y-6">
          <TicketsBanner />
          <TicketFilters />
          <TicketGrid />
        </div>
      </main>
    </div>
  )
}
