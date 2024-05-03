import styles from './ticket-description.module.scss'

export default function TicketDescription() {
  return (
    <div className={styles.description}>
      <div className={styles.column}>
        <div className={styles.title}>mow - hkt</div>
        <div className={styles.data}>10:45 - 08:00</div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>В пути</div>
        <div className={styles.data}>21:15</div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>2 пересадки</div>
        <div className={styles.data}>HKG, JNB</div>
      </div>
    </div>
  )
}
