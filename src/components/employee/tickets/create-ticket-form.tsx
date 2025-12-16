"use client"

import type React from "react"

import { useState } from "react"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog0"
import { Button } from "@/components/ui/button"

interface CreateTicketFormProps {
  onClose: () => void
}

export function CreateTicketForm({ onClose }: CreateTicketFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    priority: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New Ticket:", formData)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Create New Ticket</DialogTitle>
        <p className="text-sm text-muted-foreground mt-1">A New Ticket to the Help Desk</p>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg"
            >
              <option value="">Select Type</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg"
            >
              <option value="">Select Category</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg"
          >
            <option value="">Select Priority</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ticket Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a descriptive title for your ticket"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide detailed information about your issue or request"
            rows={4}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button type="submit" className="flex-1">
            Create Ticket
          </Button>
        </div>
      </form>
    </>
  )
}
