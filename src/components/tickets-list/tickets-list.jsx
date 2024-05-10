/* eslint-disable no-unused-vars */
import { connect } from 'react-redux'
import { useState } from 'react'
import PropTypes from 'prop-types'

import * as ticketsActions from '../../store/actions/tickets-actions'
import { toFilterTickets, toSortTickets } from '../../utils/filters'
import { createTicketId } from '../../utils/idGenerators'

import Ticket from './ticket/ticket'
import styles from './tickets-list.module.scss'

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
          return <Ticket key={createTicketId(ticket)} ticket={ticket} />
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
