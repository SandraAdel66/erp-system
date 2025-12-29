"use client"

import { TicketCard } from "./ticket-card"
import { useTickets } from "@/lib/employee/ticketQuiries"
import { Ticket } from "@/lib/employee/ticket-utils"

interface Props {
  activeFilter: string
}

export function TicketGrid({ activeFilter }: Props) {
  const { data, isLoading, isError } = useTickets({
    page: 1,
    perPage: 20,
  })

  if (isLoading) return <p>Loading tickets...</p>
  if (isError) return <p>Error loading tickets.</p>

  const tickets: Ticket[] = data?.data || []

  const filteredTickets =
    activeFilter === "all"
      ? tickets
      : tickets.filter(
          (ticket) =>
            ticket.priority?.toLowerCase() === activeFilter.toLowerCase()
        )

  if (filteredTickets.length === 0) {
    return <p className="text-gray-500">No tickets found.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
