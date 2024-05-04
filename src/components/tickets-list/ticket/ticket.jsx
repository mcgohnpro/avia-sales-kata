import TicketDescription from './ticket-description'
import styles from './ticket.module.scss'

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{price.toLocaleString()} Р</div>
        <div className="ticket__logo">
          <img className="ticket__img" src={`http://pics.avs.io/99/36/${carrier}.png`} alt="company logo" />
        </div>
      </div>
      <TicketDescription segments={segments[0]} />
      {segments[1] ? <TicketDescription segments={segments[1]} /> : null}
    </li>
  )
}
