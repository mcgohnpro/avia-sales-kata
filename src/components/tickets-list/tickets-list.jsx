import { connect } from 'react-redux'

import * as ticketsActions from '../../store/actions/tickets-actions'

import Ticket from './ticket/ticket'
import styles from './tickets-list.module.scss'

function TicketsList({ tickets }) {
  return (
    <ul className={styles['ticket-list']}>
      {tickets.slice(0, 5).map((ticket) => {
        return <Ticket key={ticket.key} ticket={ticket} />
      })}
    </ul>
  )
}

const mapStateToProps = (store) => {
  return {
    tickets: store.tickets,
  }
}

export default connect(mapStateToProps, ticketsActions)(TicketsList)
