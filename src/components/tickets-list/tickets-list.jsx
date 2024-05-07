import { connect } from 'react-redux'
import { useState } from 'react'
import PropTypes from 'prop-types'

import * as ticketsActions from '../../store/actions/tickets-actions'

import Ticket from './ticket/ticket'
import styles from './tickets-list.module.scss'

function toFilterTickets(arr, { allTransfers, withoutTransfers, oneTransfer, twoTransfers }) {
  if (allTransfers) {
    return arr
  }
  return arr.filter((ticket) => {
    const forwardTransfers = ticket.segments[0].stops.length
    const backwardsTransfers = ticket.segments[1].stops.length

    const withoutTransfersCondition = withoutTransfers ? !forwardTransfers && !backwardsTransfers : false
    const oneTransferCondition = oneTransfer ? forwardTransfers === 1 && backwardsTransfers === 1 : false
    const twoTransfersCondition = twoTransfers ? forwardTransfers === 2 && backwardsTransfers === 2 : false
    const oneOrTwoTransfersCondition =
      oneTransfer && twoTransfers
        ? forwardTransfers >= 1 && forwardTransfers < 3 && backwardsTransfers >= 1 && backwardsTransfers < 3
        : false

    return withoutTransfersCondition || oneTransferCondition || twoTransfersCondition || oneOrTwoTransfersCondition
  })
}

function toSortTickets(tickets, { cheapest, fastest }) {
  if (cheapest) {
    tickets.sort((a, b) => (a.price > b.price ? 1 : -1))
  }
  if (fastest) {
    tickets.sort((a, b) =>
      a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
    )
  }
}

function TicketsList({ tickets, filter }) {
  const [displayedCountTickets, setDisplayedCountTickets] = useState(5)
  const filteredTickets = toFilterTickets(tickets, filter)
  toSortTickets(filteredTickets, filter)
  if (!filteredTickets.length)
    return <div className={styles['no-data']}>Поиск по заданным параметрам не дал результатов</div>
  return (
    <>
      <ul className={styles['ticket-list']}>
        {filteredTickets.slice(0, displayedCountTickets).map((ticket) => {
          return <Ticket key={ticket.key} ticket={ticket} />
        })}
      </ul>
      <input
        className={styles['display-more-tickets']}
        type="button"
        value="Показать еще 5 билетов!"
        onClick={() => {
          setDisplayedCountTickets((prevState) => {
            return prevState + 5
          })
        }}
      />
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    tickets: store.tickets,
    filter: store.filter,
  }
}

export default connect(mapStateToProps, ticketsActions)(TicketsList)

TicketsList.defaultProps = {
  tickets: [],
}

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  filter: PropTypes.shape({
    allTransfers: PropTypes.bool,
    withoutTransfers: PropTypes.bool,
    oneTransfer: PropTypes.bool,
    twoTransfers: PropTypes.bool,
    cheapest: PropTypes.bool,
    fastest: PropTypes.bool,
    displayModalTransfers: PropTypes.bool,
  }).isRequired,
}
