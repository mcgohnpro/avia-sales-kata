export function toFilterTickets(tickets, filters) {
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = filters

  if (allTransfers) {
    return tickets
  }
  const selectedConditions = [withoutTransfers, oneTransfer, twoTransfers, threeTransfers].reduce(
    (acc, condition, index) => {
      if (condition) {
        acc.push(index)
      }
      return acc
    },
    []
  )

  return tickets.filter((ticket) => {
    const forwardTransfers = ticket.segments[0].stops.length
    const backwardsTransfers = ticket.segments[1].stops.length
    return (
      (forwardTransfers === selectedConditions[0] ||
        forwardTransfers === selectedConditions[1] ||
        forwardTransfers === selectedConditions[2]) &&
      (backwardsTransfers === selectedConditions[0] ||
        backwardsTransfers === selectedConditions[1] ||
        backwardsTransfers === selectedConditions[2])
    )
  })
}

export function toSortTickets(tickets, { cheapest, fastest }) {
  const sortedTickets = [...tickets]
  if (cheapest) {
    sortedTickets.sort((a, b) => (a.price > b.price ? 1 : -1))
  }
  if (fastest) {
    sortedTickets.sort((a, b) =>
      a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
    )
  }
  return sortedTickets
}
