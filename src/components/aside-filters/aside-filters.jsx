import styles from './aside-filters.module.scss'

export default function Filters() {
  return (
    <>
      <div className={styles.filter} />
      <aside className={styles.aside}>
        <p className={styles.header}>количество пересадок</p>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="1">
              <input className={styles['check-input']} type="checkbox" id="1" />
              <span className={styles['check-box']} />
              Все
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="2">
              <input className={styles['check-input']} type="checkbox" id="2" />
              <span className={styles['check-box']} />
              Без пересадок
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="3">
              <input className={styles['check-input']} type="checkbox" id="3" />
              <span className={styles['check-box']} />
              Одна пересадка
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="4">
              <input className={styles['check-input']} type="checkbox" id="4" />
              <span className={styles['check-box']} />
              Две пересадки
            </label>
          </li>
        </ul>
      </aside>
    </>
  )
}
