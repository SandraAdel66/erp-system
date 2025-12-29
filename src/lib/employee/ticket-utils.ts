import { getCategoryIcon } from "@/lib/ticket-icons"

export { getCategoryIcon }



export type StatusLevel = "pending" | "opened" | "postponed" | "ended"
export type PriorityLevel = "low" | "medium" | "high" | "urgent"

export interface TicketReply {
  sender: string
  message: string
  date: string
}

export interface TicketStatus {
  label: StatusLevel
  color: string
  date: string
}

export interface Category {
  id: number
  name: string
}

export interface Ticket {
  id: number
  ticketNumber: string
  title: string
  content: string
  status: StatusLevel
  priority: string 
  openAt: string
  category: string
  employee: string
  company?: string
  dailyStatus: boolean
}


export const statusColorMap: Record<StatusLevel, string> = {
  pending: "bg-yellow-500 text-white",
  opened: "bg-blue-500 text-white",
  postponed: "bg-orange-500 text-white",
  ended: "bg-green-500 text-white",
}



const priorityUIMap: Record<
  PriorityLevel,
  { bgColor: string; badgeColor: string; badgeBg: string }
> = {
  low: {
    bgColor: "bg-blue-500",
    badgeColor: "text-blue-700",
    badgeBg: "bg-blue-100",
  },
  medium: {
    bgColor: "bg-purple-500",
    badgeColor: "text-purple-700",
    badgeBg: "bg-purple-50",
  },
  high: {
    bgColor: "bg-orange-500",
    badgeColor: "text-orange-700",
    badgeBg: "bg-orange-50",
  },
  urgent: {
    bgColor: "bg-red-500",
    badgeColor: "text-red-700",
    badgeBg: "bg-red-50",
  },
}


export function getPriorityColor(
  priority: string
): { bgColor: string; badgeColor: string; badgeBg: string } {
  const normalized = priority.toLowerCase() as PriorityLevel

  return priorityUIMap[normalized] || priorityUIMap.medium
}
