"use client"

import { useState } from "react"
import { Send, ArrowLeft } from "lucide-react"

interface AiSupportChatProps {
  onBack: () => void
}

export function AiSupportChat({ onBack }: AiSupportChatProps) {
  const [message, setMessage] = useState("")
  type Message = {
    id: number
    type: "ai" | "user"
    text: string
  }
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      text: "Hello! I'm your AI Support assistant. I'm here to help you resolve issues quickly. Please describe the problem you are experiencing. Ask if I can help you do my best to assist you",
    },
  ])
  

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      text: message,
    }

    setMessages([...messages, userMessage])
    setMessage("")

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai" as const,
        text: "Thank you for reaching out. I'm processing your request. How can I assist you further?",
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 500)
  }

  return (
    <>
      <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
        <button onClick={onBack} className="hover:bg-gray-100 p-1 rounded transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">AI Support</h2>
          <p className="text-xs text-gray-500 mt-1">Powered by Artificial Intelligence</p>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <div className="bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.type === "user" ? "bg-blue-500 text-white" : "bg-white border border-gray-200 text-gray-900"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message here"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-3 rounded-lg transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  )
}
