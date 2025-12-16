'use client'

import { Ticket, getCategoryIcon } from "@/lib/employee/ticket-utils"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"

interface Props {
  ticket: Ticket & { sentBy: string; assignedTo?: string }
}

// Updated priority colors
const priorityColors: Record<string, string> = {
  urgent: "#EF4444",   // red
  high: "#F59E0B",     // yellow/orange
  medium: "#8B5CF6",   // purple
  low: "#2563EB"       // blue
}

export default function TicketDetailsTab({ ticket }: Props) {
  const Icon = getCategoryIcon(ticket.category)
  const priorityKey = ticket.priority?.toLowerCase() || "medium"
  const bgColor = priorityColors[priorityKey] || "#8B5CF6"

  return (
    <Card className="space-y-0 overflow-hidden">
      {/* Header with full-width colored background */}
      <CardHeader
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: bgColor }}
      >
        {/* Icon aligned left */}
        <Icon className="w-6 h-6 text-white" />

        {/* Title aligned right */}
        <h3 className="text-lg font-semibold text-white text-right">
          {ticket.title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-2 p-4">
        <div>
          <p className="text-gray-500 text-xs font-medium">Category</p>
          <p className="text-gray-900 text-sm">{ticket.category}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-medium">Ticket ID</p>
          <p className="text-gray-900 text-sm">{ticket.id}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-medium">Sent By</p>
          <p className="text-gray-900 text-sm">{ticket.sentBy}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-medium">Assigned To</p>
          <p className="text-gray-900 text-sm">{ticket.assignedTo || "Not Assigned"}</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs font-medium">Description</p>
          <p className="text-gray-900 text-sm">{ticket.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
