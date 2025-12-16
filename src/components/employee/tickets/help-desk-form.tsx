'use client'

import type React from "react"
import { useState } from "react"
import { UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HelpDeskFormProps {
  onBack: () => void
}

export function HelpDeskForm({ onBack }: HelpDeskFormProps) {
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    priority: "",
    title: "",
    description: "",
    attachment: null as File | null,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, attachment: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Ticket Submitted:", formData)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">

      {/* THE WINDOW ITSELF — make scrollable content so buttons stay visible */}
      <div className="w-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="bg-purple-400 text-white text-center py-6 rounded-t-3xl">
          <h2 className="text-2xl font-semibold">Create New Ticket</h2>
          <p className="text-sm opacity-90 -mt-1">A New Ticket to the Help Desk</p>
        </div>

        {/* Content wrapper */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Scrollable fields area */}
          <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-4">

          {/* Row 1 */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-base font-medium text-gray-700 mb-2">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              >
                <option value="">Select Type</option>
                <option value="camera">Camera</option>
                <option value="monitor">Monitor</option>
                <option value="laptop">Laptop</option>
                <option value="router">Router</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-base font-medium text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl"
              >
                <option value="">Select Category</option>
                <option value="technical">Technical</option>
                <option value="billing">Billing</option>
                <option value="network">Network</option>
              </select>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Ticket Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Describe your ticket"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Provide details about your issue"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Attachment */}
          <div>
            <label className="block text-base font-medium text-gray-700 mb-3">Attachment</label>

            <label className="flex flex-col items-center justify-center h-36 border border-gray-300 rounded-2xl bg-gray-50 cursor-pointer hover:bg-gray-100">
              <UploadCloud className="w-10 h-10 text-gray-500 mb-2" />
              <p className="text-gray-700 font-medium">Upload or drag & drop</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>

              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>

            {formData.attachment && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {formData.attachment.name}
              </p>
            )}
          </div>

          </div>

          {/* Buttons (kept visible below the scrollable area) */}
          <div className="flex gap-4 pt-4 border-t border-gray-100 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1 rounded-xl py-3"
            >
              Back
            </Button>

            <Button
              type="submit"
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-3"
            >
              Submit Ticket
            </Button>
          </div>

        </form>
      </div>
    </div>
  )
}
