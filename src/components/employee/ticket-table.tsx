'use client'

interface Ticket {
  title: string
  description: string
  status: 'Pending' | 'Opened' | 'Postponed'
}

const tickets: Ticket[] = [
  { title: 'Update Documentation', description: 'Review and update API documentation for v2.0 release.', status: 'Pending' },
  { title: 'Code Review', description: 'Review pull requests for the new feature implementation.', status: 'Opened' },
  { title: 'Team Meeting', description: 'Prepare agenda and materials for quarterly planning meeting.', status: 'Postponed' },
]

export default function TicketsTable() {
  const statusStyles: Record<string, string> = {
    Pending: 'bg-yellow-50 text-yellow-700',
    Opened: 'bg-blue-600 text-white',
    Postponed: 'bg-orange-50 text-orange-700',
  }

  const rowBg: Record<string, string> = {
    Pending: 'hover:bg-slate-50 transition',
    Opened: 'bg-blue-50 hover:bg-blue-100 transition',
    Postponed: 'hover:bg-slate-50 transition',
  }

  return (
    <section className="rounded-2xl p-6">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

        {/* HEADER */}
        <div className="px-4 py-3 grid grid-cols-12 text-sm font-semibold text-slate-600 bg-slate-50 border-b border-slate-200">
          <div className="col-span-4">Title</div>
          <div className="col-span-6">Description</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-slate-200">
          {tickets.map((ticket) => (
            <div key={ticket.title} className={`px-4 py-4 grid grid-cols-12 items-center ${rowBg[ticket.status]}`}>
              <div className={`col-span-4 font-semibold ${ticket.status === 'Opened' ? 'text-blue-700' : ticket.status === 'Postponed' ? 'text-orange-600' : 'text-slate-800'}`}>
                {ticket.title}
              </div>
              <div className={`col-span-6 text-sm ${ticket.status === 'Opened' ? 'text-slate-600' : 'text-slate-500'}`}>
                {ticket.description}
              </div>
              <div className="col-span-2 text-right">
                <span className={`px-3 py-1 text-xs rounded-full ${statusStyles[ticket.status]}`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
