"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card0"
import { CheckCircle2, XCircle } from "lucide-react"

interface StatCard {
  id: string
  icon: React.ComponentType<{ className?: string; color?: string }>
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
        return (
          <Card
            key={stat.id}
            role="button"
            tabIndex={0}
            className={cn(
              "p-8 flex flex-col items-center text-center gap-4 shadow-md hover:shadow-lg active:shadow-none active:bg-white transition-shadow duration-150 cursor-pointer bg-white",
            )}
          >
            <div className="w-12 h-12 bg-[#0161B1] rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>


            <div>
              <p className={cn("text-sm font-medium")} style={{ color: '#01335D' }}>{stat.title}</p>
              <p className={cn("text-3xl font-bold")} style={{ color: '#01335D' }}>{stat.count}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
