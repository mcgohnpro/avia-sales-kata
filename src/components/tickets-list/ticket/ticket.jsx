import logo from '../../../assets/S7 Logo.png'

import TicketDescription from './ticket-description'
import styles from './ticket.module.scss'

export default function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>13 400 Р</div>
        <div className="ticket__logo">
          <img className="ticket__img" src={logo} alt="company logo" />
        </div>
      </div>
      <TicketDescription />
      <TicketDescription />
    </li>
  )
}
