"use client"

import { useState } from "react"
import Header from "@/components/employee/header"
import { TicketsBanner } from "@/components/employee/tickets/tickets-banner"
import { TicketFilters } from "@/components/employee/tickets/ticket-filters"
import { TicketGrid } from "@/components/employee/tickets/ticket-grid"
import { TicketModal } from "@/components/employee/tickets/ticket-modal"

export default function TicketsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        <Header />

        <div className="p-6 md:p-8 space-y-6">
          <TicketsBanner />

          <TicketFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onAddTicket={() => setIsModalOpen(true)}
          />

          <TicketGrid activeFilter={activeFilter} />
        </div>

        {/* Modal */}
        <TicketModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </main>
    </div>
  )
}
