"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TicketModal } from "./ticket-modal"

const filters = [
  { id: "all", label: "All tickets", count: null },
  { id: "low", label: "Low", count: null },
  { id: "medium", label: "Medium", count: null },
  { id: "high", label: "High", count: null },
  { id: "urgent", label: "Urgent", count: null },
]

export function TicketFilters() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={activeFilter === filter.id ? "bg-blue-600 text-white" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <Plus size={20} />
          Add New Ticket
        </Button>
      </div>

      <TicketModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
