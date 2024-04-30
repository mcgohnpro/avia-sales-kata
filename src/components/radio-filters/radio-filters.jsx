import styles from './radio-filters.module.scss'

export default function RadioFilters() {
  return (
    <div className={[styles.filters, styles['filters--margin']].join(' ')}>
      <label className={styles.label} htmlFor="cheapest">
        <input type="radio" id="cheapest" name="filters" />
        <span>самый дешевый</span>
      </label>
      <label className={styles.label} htmlFor="fastest">
        <input type="radio" id="fastest" name="filters" />
        <span>самый быстрый</span>
      </label>
      <label className={styles.label} htmlFor="optimal">
        <input type="radio" id="optimal" name="filters" />
        <span>оптимальный</span>
      </label>
    </div>
  )
}
