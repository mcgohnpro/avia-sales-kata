export function getId() {
  return `id${Math.floor(Math.random() * 1e16).toString(16)}`
} // TODO убрать в отдельную утилиту
export function createTicketId(ticket) {
  return `${ticket.segments[0].origin}-${ticket.segments[0].destination}-${ticket.segments[0].date}${ticket.segments[1].origin}-${ticket.segments[1].destination}-${ticket.segments[1].date}`
}
