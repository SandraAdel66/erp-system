'use client'

import { Ticket, statusColorMap } from "@/lib/employee/ticket-utils"

interface StatusHistoryEntry {
  label: string
  date: string
}

interface Props {
  ticket: Ticket & { statusHistory?: StatusHistoryEntry[] } // optional
}

export default function StatusHistoryTab({ ticket }: Props) {
  const history: StatusHistoryEntry[] = ticket.statusHistory || []

  if (history.length === 0) {
    return <p className="text-gray-500 text-sm">No status history available.</p>
  }

  return (
    <ul className="space-y-2">
      {history.map((status, index) => (
        <li
          key={index}
          className={`px-3 py-1 rounded-full text-white ${statusColorMap[status.label as keyof typeof statusColorMap] ?? ''}`}
        >
          {status.label.toUpperCase()} - {status.date}
        </li>
      ))}
    </ul>
  )
}
