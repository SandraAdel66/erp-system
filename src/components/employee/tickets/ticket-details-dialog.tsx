'use client'

import { useState, ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog0"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Ticket #{ticket.id}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="details" className="mt-4">
          <TabsList>
            <TabsTrigger value="details">Ticket Details</TabsTrigger>
            <TabsTrigger value="status">Status History</TabsTrigger>
            <TabsTrigger value="replies">Replies</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <TicketDetailsTab ticket={ticket} />
          </TabsContent>

          <TabsContent value="status">
            <StatusHistoryTab ticket={ticket} />
          </TabsContent>

          <TabsContent value="replies">
            <RepliesTab ticket={ticket} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
