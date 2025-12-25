"use client"

import { TicketCard } from "./ticket-card"
import { useTickets } from "@/lib/employee/ticketQuiries"
import { Ticket, PriorityLevel } from "@/lib/employee/ticket-utils"

export function TicketGrid() {
  const { data, isLoading, isError } = useTickets({
    page: 1,
    perPage: 20,
  })

  if (isLoading) return <p>Loading tickets...</p>
  if (isError) return <p>Error loading tickets.</p>

  const ticketsData: Ticket[] = (data?.data || []).map((ticket) => ({
    ...ticket,
    priority: (() => {
      const validPriorities: PriorityLevel[] = ["Low", "Medium", "High", "Urgent"]
      const formatted = ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1).toLowerCase()
      return validPriorities.includes(formatted as PriorityLevel)
        ? (formatted as PriorityLevel)
        : "Medium"
    })(),

    category: ticket.category || "unknown",
    employee: ticket.employee || "Unknown" ,
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ticketsData.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
