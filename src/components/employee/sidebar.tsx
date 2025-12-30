'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Ticket } from 'lucide-react'

const items = [
  { label: 'Dashboard', href: '/employee/homePage', icon: Home },
  { label: 'Tickets', href: '/employee/tickets', icon: Ticket },
]

export default function Sidebar() {
  const pathname = usePathname() || ''

  return (
    <aside className="w-64 bg-white h-full border-r border-slate-200 px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">ERP System</h1>
      </div>

      <nav className="space-y-2">
        {items.map((it) => {
          const isActive = pathname.startsWith(it.href)
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 transition-all
                ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}
              `}
            >
              <span
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all
                  ${isActive ? 'bg-blue-500' : 'opacity-0 group-hover:opacity-100 bg-transparent'}
                `}
              />
              <it.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              <span className="text-sm font-medium">{it.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
