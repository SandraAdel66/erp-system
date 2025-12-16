'use client'

import { Ticket } from "@/lib/employee/ticket-utils"

interface Props {
  ticket: Ticket
}

export default function RepliesTab({ ticket }: Props) {
  const replies = ticket.replies || []

  if (replies.length === 0) {
    return (
      <div className="flex justify-center items-center h-32 text-gray-500 text-sm">
        No replies yet
      </div>
    )
  }

  return (
    <div className="flex flex-col space-y-4 max-h-80 overflow-y-auto">
      {replies.map((reply, index) => (
        <div key={index} className="p-2 rounded-md border">
          <p className="font-semibold">{reply.sender}</p>
          <p className="text-sm text-gray-700">{reply.message}</p>
          <p className="text-xs text-gray-400">{reply.date}</p>
        </div>
      ))}
    </div>
  )
}
