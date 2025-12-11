"use client"

import { TicketCard } from "./ticket-card"

const ticketsData = [
  {
    id: "T001",
    priority: "High",
    category: "wifi",
    title: "Software Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T002",
    priority: "Medium",
    category: "laptop",
    title: "Category Title",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T003",
    priority: "Low",
    category: "monitor",
    title: "Category Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T004",
    priority: "Urgent",
    category: "laptop",
    title: "Hardware Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T005",
    priority: "High",
    category: "phone",
    title: "Software Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T006",
    priority: "Medium",
    category: "wifi",
    title: "Category Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T007",
    priority: "Low",
    category: "monitor",
    title: "Software Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T008",
    priority: "Urgent",
    category: "phone",
    title: "Hardware Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
  {
    id: "T009",
    priority: "High",
    category: "laptop",
    title: "Category Replacement Issue",
    description: "Major usage downtime",
    sentBy: "Mr. John",
  },
]

export function TicketGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ticketsData.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  )
}
