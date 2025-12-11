'use client'

import { Ticket } from "@/lib/employee/ticket-utils"

interface Props {
  ticket: Ticket
}

export default function RepliesTab({ ticket }: Props) {
  return (
    <div className="flex flex-col space-y-4 max-h-80 overflow-y-auto">
      {(ticket.replies || []).map((reply, index) => (
        <div key={index} className="p-2 rounded-md border">
          <p className="font-semibold">{reply.sender}</p>
          <p className="text-sm text-gray-700">{reply.message}</p>
          <p className="text-xs text-gray-400">{reply.date}</p>
        </div>
      ))}
    </div>
  )
}
