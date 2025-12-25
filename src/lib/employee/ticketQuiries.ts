import { useQuery } from '@tanstack/react-query'
import {
  fetchTickets,
  fetchTicketById,
  fetchCategories,
  FetchTicketsParams,
} from './ticketsApi'



export const useTickets = (params: FetchTicketsParams) => {
  return useQuery({
    queryKey: ['tickets', params],
    queryFn: () => fetchTickets(params),
    placeholderData: (previousData) => previousData,
    staleTime: 2 * 60 * 1000,
  })
}



export const useTicket = (ticketId?: number | string) => {
  return useQuery({
    queryKey: ['ticket', ticketId],
    queryFn: () => fetchTicketById(ticketId as number),
    enabled: !!ticketId,
    staleTime: 2 * 60 * 1000,
  })
}


export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000,
  })
}
