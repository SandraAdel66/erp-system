'use client'

import type React from "react"
import { useState } from "react"
import { useQuery } from '@tanstack/react-query'
import { UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { apiFetch } from "@/lib/api"

interface HelpDeskFormProps {
  onBack: () => void
}

interface Category {
  id: number
  name: string
}

interface TicketType {
  id: number
  name: string
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

  // Fetch categories
  const { data: categories = [], isLoading: loadingCategories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => apiFetch('/category/index')
  })

  // Fetch types
  const { data: types = [], isLoading: loadingTypes } = useQuery<TicketType[]>({
    queryKey: ['types'],
    queryFn: () => apiFetch('/type/index')
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
    // call your addTicket API here
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center py-6 overflow-y-auto bg-black/30 backdrop-blur-sm px-4">
      <div className="w-full max-w-md md:w-[500px] my-auto bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="bg-purple-400 text-white text-center py-6 rounded-t-3xl">
          <h2 className="text-2xl font-semibold">Create New Ticket</h2>
          <p className="text-sm opacity-90 -mt-1">A New Ticket to the Help Desk</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="max-h-[calc(85vh-200px)] overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Type Select */}
                <div className="flex-1">
                  <label className="block text-base font-medium text-gray-700 mb-2">Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Type</option>
                    {loadingTypes ? (
                      <option disabled>Loading types...</option>
                    ) : (
                      types.map(t => (
                        <option key={t.id} value={t.name}>{t.name}</option>
                      ))
                    )}
                  </select>
                </div>

                {/* Category Select */}
                <div className="flex-1">
                  <label className="block text-base font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {loadingCategories ? (
                      <option disabled>Loading categories...</option>
                    ) : (
                      categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))
                    )}
                  </select>
                </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y min-h-[120px]"
                  required
                />
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-base font-medium text-gray-700 mb-3">
                  Attachment <span className="text-gray-500 text-sm font-normal">(Optional)</span>
                </label>
                <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                  <UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
                  <p className="text-gray-600 font-medium">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileUpload} 
                    accept=".png,.jpg,.jpeg,.gif"
                  />
                </label>
                {formData.attachment && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-700 font-medium truncate">
                          {formData.attachment.name}
                        </p>
                        <p className="text-xs text-green-600 mt-1">
                          {(formData.attachment.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, attachment: null }))}
                        className="text-xs text-red-600 hover:text-red-800 font-medium ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 pt-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="flex-1 rounded-xl py-3 border-2 hover:bg-gray-50"
              >
                Back
              </Button>

              <Button
                type="submit"
                className="flex-1 bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-3 font-medium"
              >
                Submit Ticket
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
