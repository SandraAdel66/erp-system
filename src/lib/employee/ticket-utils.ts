
import { getCategoryIcon } from "@/lib/ticket-icons" 

export { getCategoryIcon } 

export type StatusLevel = "pending" | "opened" | "postponed" | "ended"
export type PriorityLevel = "Low" | "Medium" | "High" | "Urgent"

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
  id: number;
  name: string;
}
export interface Ticket {
  id: number;
  ticketNumber: string;
  title: string;
  content: string;
  status: string;
  priority: string;
  openAt: string;
  category: string;
  employee: string;
  company?: string;
  dailyStatus: boolean;
}


export const priorityColorMap: Record<PriorityLevel, string> = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Medium: "bg-blue-100 text-blue-800 border-blue-200",
  High: "bg-orange-100 text-orange-800 border-orange-200",
  Urgent: "bg-red-100 text-red-800 border-red-200",
}

export const statusColorMap: Record<StatusLevel, string> = {
  pending: "bg-yellow-500 text-white",
  opened: "bg-blue-500 text-white",
  postponed: "bg-orange-500 text-white",
  ended: "bg-green-500 text-white",
}


export function getPriorityColor(priority: string): { bgColor: string; badgeColor: string; badgeBg: string } {
  const colorMap: Record<string, { bgColor: string; badgeColor: string; badgeBg: string }> = {
    High: {
      bgColor: "bg-orange-500",
      badgeColor: "text-orange-700",
      badgeBg: "bg-orange-50",
    },
    Medium: {
      bgColor: "bg-purple-500",
      badgeColor: "text-purple-700",
      badgeBg: "bg-purple-50",
    },
    Low: {
      bgColor: "bg-blue-500",
      badgeColor: "text-blue-700",
      badgeBg: "bg-blue-100",
    },
    Urgent: {
      bgColor: "bg-red-500",
      badgeColor: "text-red-700",
      badgeBg: "bg-red-50",
    },
  }

  return colorMap[priority] || colorMap.Medium
}
