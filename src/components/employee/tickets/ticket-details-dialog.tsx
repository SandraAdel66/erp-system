'use client'

import { useState, ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog0"

import TicketDetailsTab from "./ticket-details-tab"
import StatusHistoryTab from "./status-history-tab"
import RepliesTab from "./replies-tab"
import { Ticket } from "@/lib/employee/ticket-utils"

interface Props {
  ticket: Ticket
  children: ReactNode
}

export default function TicketDetailsDialog({ ticket, children }: Props) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"details" | "status" | "replies">("details")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Ticket #{ticket.id}</DialogTitle>
        </DialogHeader>

        {/* Tabs Buttons */}
        <div className="mt-4 grid grid-cols-3 gap-2 bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              activeTab === "details"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Ticket Details
          </button>

          <button
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              activeTab === "status"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("status")}
          >
            Status History
          </button>

          <button
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              activeTab === "replies"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("replies")}
          >
            Replies
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === "details" && <TicketDetailsTab ticket={ticket} />}
          {activeTab === "status" && <StatusHistoryTab ticket={ticket} />}
          {activeTab === "replies" && <RepliesTab ticket={ticket} />}
        </div>
      </DialogContent>
    </Dialog>
  )
}
