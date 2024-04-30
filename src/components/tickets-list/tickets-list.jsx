import Ticket from './ticket/ticket'
import styles from './tickets-list.module.scss'

export default function TicketsList() {
  return (
    <ul className={styles['ticket-list']}>
      <Ticket />
    </ul>
  )
}
