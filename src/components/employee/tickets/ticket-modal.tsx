"use client"

import { useState } from "react"
import { TicketTypeSelector } from "./ticket-type-selector"
import { AiSupportChat } from "./ai-support-chat"
import { HelpDeskForm } from "./help-desk-form"
import { X } from "lucide-react"

type ModalView = "type-selector" | "ai-support" | "help-desk"

interface TicketModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TicketModal({ open, onOpenChange }: TicketModalProps) {
  const [currentView, setCurrentView] = useState<ModalView>("type-selector")

  const handleSelectType = (type: "ai" | "helpdesk") => {
    if (type === "ai") {
      setCurrentView("ai-support")
    } else {
      setCurrentView("help-desk")
    }
  }

  const handleBack = () => {
    setCurrentView("type-selector")
  }

  const handleClose = () => {
    setCurrentView("type-selector")
    onOpenChange(false)
  }

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={handleClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[50vh] relative flex flex-col">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>

          {/* Modal content */}
          <div className="p-6 overflow-y-auto flex-1">
            {currentView === "type-selector" && <TicketTypeSelector onSelectType={handleSelectType} />}

            {currentView === "ai-support" && <AiSupportChat onBack={handleBack} />}

            {currentView === "help-desk" && <HelpDeskForm onBack={handleBack} />}
          </div>
        </div>
      </div>
    </>
  )
}
