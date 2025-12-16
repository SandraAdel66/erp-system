"use client"

import { Bot, Headphones } from "lucide-react"

interface TicketTypeSelectorProps {
  onSelectType: (type: "ai" | "helpdesk") => void
}

export function TicketTypeSelector({ onSelectType }: TicketTypeSelectorProps) {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-2 pb-4">
        <h2 className="text-2xl font-semibold">Choose Ticket Type</h2>
        <p className="text-sm text-muted-foreground">Select how you want to create your support ticket</p>
      </div>

      {/* Grid of ticket type options */}
      <div className="grid grid-cols-2 gap-4">
        {/* AI Support Option */}
        <button
          onClick={() => onSelectType("ai")}
          className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-all duration-200 hover:shadow-md active:scale-95"
        >
          <div className="bg-blue-500 text-white rounded-lg p-3">
            <Bot size={32} />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-blue-900 text-sm">AI Support</h3>
            <p className="text-xs text-blue-700 mt-1">Get instant help</p>
          </div>
        </button>

        {/* Help Desk Option */}
        <button
          onClick={() => onSelectType("helpdesk")}
          className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-purple-500 bg-purple-50 hover:bg-purple-100 transition-all duration-200 hover:shadow-md active:scale-95"
        >
          <div className="bg-purple-500 text-white rounded-lg p-3">
            <Headphones size={32} />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-purple-900 text-sm">Help Desk</h3>
            <p className="text-xs text-purple-700 mt-1">Contact support</p>
          </div>
        </button>
      </div>
    </div>
  )
}
