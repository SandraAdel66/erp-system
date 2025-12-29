"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = [
  { id: "all", label: "All tickets" },
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
  { id: "urgent", label: "Urgent" },
]

interface Props {
  activeFilter: string
  onFilterChange: (filter: string) => void
  onAddTicket: () => void
}

export function TicketFilters({
  activeFilter,
  onFilterChange,
  onAddTicket,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            variant={activeFilter === filter.id ? "default" : "outline"}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <Button
        onClick={onAddTicket}
        className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
      >
        <Plus size={20} />
        Add New Ticket
      </Button>
    </div>
  )
}
