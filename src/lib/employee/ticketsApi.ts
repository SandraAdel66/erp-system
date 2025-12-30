import { apiFetch } from '@/lib/api'
import { Ticket } from '@/lib/employee/ticket-utils'

export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

export interface PaginationMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
  links?: PaginationLink[]
}

export interface ApiListResponse<T, M = PaginationMeta> {
  data: T
  meta?: M
}

export interface FetchTicketsParams {
  filters?: Record<string, unknown>
  page?: number
  perPage?: number
  paginate?: boolean
  orderBy?: string
  orderByDirection?: 'asc' | 'desc'
}

export interface Type {
  id: number
  name: string
}

export interface Category {
  id: number
  name: string
}

export const fetchTickets = async (
  params: FetchTicketsParams
): Promise<ApiListResponse<Ticket[]>> => {
  const payload = {
    filters: params.filters ?? {},
    page: params.page ?? 1,
    perPage: params.perPage ?? 15,
    paginate: params.paginate ?? true,
    orderBy: params.orderBy ?? 'id',
    orderByDirection: params.orderByDirection ?? 'desc',
  }

  const json = await apiFetch(`/ticket/index`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (
    json &&
    typeof json === 'object' &&
    'data' in json &&
    Array.isArray((json as { data: unknown }).data)
  ) {
    return json as ApiListResponse<Ticket[]>
  }

  throw new Error('Invalid tickets response format')
}

export const fetchTicketById = async (
  id: number | string
): Promise<Ticket> => {
  const json = await apiFetch(`/ticket/${id}`)

  if (json && typeof json === 'object' && 'data' in json) {
    return (json as { data: Ticket }).data
  }

  throw new Error('Invalid ticket response format')
}

export const fetchCategories = async (): Promise<Category[]> => {
  const json = await apiFetch('/category/index', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paginate: false }),
  })

  if (json && typeof json === 'object' && Array.isArray(json.data)) {
    return json.data as Category[]
  }

  throw new Error('Invalid categories response format')
}

export const fetchTypes = async (): Promise<Type[]> => {
  const json = await apiFetch('/type/index', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filters: {
        "type": 'device',
      },
    }),
  })

  if (
    json &&
    typeof json === 'object' &&
    'data' in json &&
    Array.isArray((json as { data: unknown }).data)
  ) {
    return (json as { data: Type[] }).data
  }

  throw new Error('Invalid types response format')
}

export interface CreateTicketPayload {
  title: string
  content: string
  category_id: number
  device_id: number
}

export const createTicketByEmployee = async (
  payload: CreateTicketPayload
): Promise<Ticket> => {
  const json = await apiFetch('/ticket/create-by-employee', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (json && typeof json === 'object' && 'data' in json) {
    return (json as { data: Ticket }).data
  }

  throw new Error('Failed to create ticket')
}
