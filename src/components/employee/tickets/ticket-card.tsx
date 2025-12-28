import { getCategoryIcon } from "@/lib/employee/ticket-icons"
import { Ticket , getPriorityColor } from "@/lib/employee/ticket-utils"
import TicketDetailsDialog  from "./ticket-details-dialog"

interface TicketCardProps {
  ticket:Ticket
}

export function TicketCard({ ticket }: TicketCardProps) {
  const { bgColor, badgeColor, badgeBg } = getPriorityColor(ticket.priority)
  const IconComponent = getCategoryIcon(ticket.category)

  return (
    <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`${bgColor} text-white rounded-lg p-2 w-14 h-14 flex items-center justify-center flex-shrink-0`}
        >
          <IconComponent className="w-7 h-7" />
        </div>
        <span className={`${badgeBg} ${badgeColor} text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap`}>
          {ticket.priority}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-900 font-semibold text-sm mb-2">{ticket.title}</h3>
        <p className="text-blue-600 text-xs font-medium mb-1">Category</p>
        <p className="text-gray-500 text-xs line-clamp-2">{ticket.category}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
        <div className="text-xs">
          <p className="text-blue-600">ID</p>
          <p className="text-gray-500 font-medium text-xs">{ticket.id}</p>
        </div>
      </div>

      <TicketDetailsDialog ticket={ticket}>
        <button className="w-full mt-3 text-blue-600 hover:text-blue-700 font-medium text-xs transition-colors">
          View details
        </button>
      </TicketDetailsDialog>
    </div>
  )
}
