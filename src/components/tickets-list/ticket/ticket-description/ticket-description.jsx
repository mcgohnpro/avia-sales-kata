import { addMinutes } from 'date-fns'

import formatStrimgTransfer from '../../../../utils/formatStringTransfer'

import styles from './ticket-description.module.scss'

export default function TicketDescription({ segments }) {
  const { origin, destination, duration, date, stops } = segments
  const dateTime = new Date(date)
  const dateTimeDestination = addMinutes(dateTime, duration)
  return (
    <div className={styles.description}>
      <div className={styles.column}>
        <div className={styles.title}>
          {origin} - {destination}
        </div>
        <div className={styles.data}>
          {`${dateTime.getHours()}`.padStart(2, 0)}
          {`:${dateTime.getMinutes()}`.padStart(2, 0)}
          {' - '}
          {`${dateTimeDestination.getHours()}`.padStart(2, 0)}
          {`:${dateTimeDestination.getMinutes()}`.padStart(2, 0)}
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>В пути</div>
        <div className={styles.data}>{`${Math.floor(duration / 60)}ч ${duration % 60}м`}</div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>{formatStrimgTransfer(stops.length)}</div>
        <div className={styles.data}>{stops.join(', ')}</div>
      </div>
    </div>
  )
}
