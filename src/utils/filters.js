export function toFilterTickets(arr, { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers }) {
  if (allTransfers) {
    return arr
  }
  return arr.filter((ticket) => {
    const forwardTransfers = ticket.segments[0].stops.length
    const backwardsTransfers = ticket.segments[1].stops.length

    const withoutTransfersCondition = withoutTransfers && !forwardTransfers && !backwardsTransfers
    const oneTransferCondition = oneTransfer && forwardTransfers === 1 && backwardsTransfers === 1
    const twoTransfersCondition = twoTransfers && forwardTransfers === 2 && backwardsTransfers === 2
    const threeTransfersCondition = threeTransfers && forwardTransfers === 3 && backwardsTransfers === 2

    return withoutTransfersCondition || oneTransferCondition || twoTransfersCondition || threeTransfersCondition
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
