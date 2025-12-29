'use client'

import type React from 'react'
import { useState } from 'react'
import { UploadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { fetchCategories, fetchTypes } from '@/lib/employee/ticketsApi'

interface HelpDeskFormProps {
  onBack: () => void
}

export function HelpDeskForm({ onBack }: HelpDeskFormProps) {
  const [formData, setFormData] = useState({
    type: '',
    category: '',
    priority: '',
    title: '',
    description: '',
    attachment: null as File | null,
  })


  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  const { data: types, isLoading: typesLoading } = useQuery({
    queryKey: ['types'],
    queryFn: fetchTypes,
  })



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, attachment: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Ticket Submitted:', formData)
  }



  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center py-6 overflow-y-auto bg-black/30 backdrop-blur-sm px-4">
      <div className="w-full max-w-md md:w-[500px] my-auto bg-white rounded-3xl shadow-2xl border overflow-hidden">

        {/* Header */}
        <div className="bg-purple-400 text-white text-center py-6">
          <h2 className="text-2xl font-semibold">Create New Ticket</h2>
          <p className="text-sm opacity-90">A New Ticket to the Help Desk</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="max-h-[calc(85vh-200px)] overflow-y-auto p-6 space-y-6">

            {/* Type & Category */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* TYPE */}
              <div className="flex-1">
                <label className="block font-medium mb-2">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl"
                >
                  <option value="">
                    {typesLoading ? 'Loading types...' : 'Select Type'}
                  </option>
                  {types?.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* CATEGORY */}
              <div className="flex-1">
                <label className="block font-medium mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl"
                >
                  <option value="">
                    {categoriesLoading ? 'Loading categories...' : 'Select Category'}
                  </option>
                  {categories?.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block font-medium mb-2">Ticket Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            {/* Attachment */}
            <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-2xl cursor-pointer">
              <UploadCloud className="w-10 h-10 mb-2 text-gray-400" />
              <p>Click to upload</p>
              <input type="file" hidden onChange={handleFileUpload} />
            </label>

          </div>

          {/* Buttons */}
          <div className="p-6 border-t flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Back
            </Button>
            <Button type="submit" className="flex-1 bg-purple-500 text-white">
              Submit Ticket
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
