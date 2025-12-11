"use client"

import { Search, Heart, Bell, Laptop , FileText} from "lucide-react"
import { Input } from "@/components/ui/input"


export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between p-4 md:p-6 gap-4">
        
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search Something"
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Icons + Profile */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* Action Icons */}
          <button className="p-2 rounded-md hover:bg-muted transition-colors">
            <FileText className="w-5 h-5 text-yellow-500 hover:text-yellow-600" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted transition-colors">
            <Heart className="w-5 h-5 text-red-500 hover:text-red-600" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-blue-500 hover:text-blue-600" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted transition-colors">
            <Laptop className="w-5 h-5 text-red-700 hover:text-red-800" />
          </button>

          
        </div>
      </div>
    </header>
  )
}
