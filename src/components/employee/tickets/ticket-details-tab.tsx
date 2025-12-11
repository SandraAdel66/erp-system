'use client'

import { Ticket, getCategoryIcon } from "@/lib/employee/ticket-utils"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

interface Props {
  ticket: Ticket & { sentBy: string; assignedTo?: string }
}

export default function TicketDetailsTab({ ticket }: Props) {
  const Icon = getCategoryIcon(ticket.category)

  return (
    <Card className="space-y-4">
      {/* Header with icon and title */}
      <CardHeader className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-blue-600" />
        <CardTitle className="text-lg">{ticket.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
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
