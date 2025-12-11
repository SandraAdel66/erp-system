"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card0"
import { CheckCircle2, XCircle } from "lucide-react"

interface StatCard {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  count: number
  color: "blue" | "red"
}

const stats: StatCard[] = [
  {
    id: "pending",
    icon: CheckCircle2,
    title: "Pending Tickets",
    count: 5,
    color: "blue",
  },
  {
    id: "end",
    icon: XCircle,
    title: "End Ticket",
    count: 5,
    color: "red",
  },
]

export default function TicketStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        const isBlue = stat.color === "blue"
        return (
          <Card
            key={stat.id}
            className={cn(
              "p-8 flex flex-col items-center text-center gap-4",
              isBlue ? "bg-blue-50 hover:shadow-md" : "bg-red-50 hover:shadow-md",
            )}
          >
            <div className={cn("p-4 rounded-lg", isBlue ? "bg-blue-500" : "bg-red-500")}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className={cn("text-sm font-medium", isBlue ? "text-blue-700" : "text-red-700")}>{stat.title}</p>
              <p className={cn("text-3xl font-bold", isBlue ? "text-blue-600" : "text-red-600")}>{stat.count}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
