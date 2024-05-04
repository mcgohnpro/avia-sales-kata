import { connect } from 'react-redux'

import * as filtersActions from '../../store/actions/filters-actions'

import styles from './aside-filters.module.scss'

function Filters({
  filtersProps,
  setAllTicketsFilter,
  setWithoutTransferFilter,
  setOneTransferFilter,
  setTwoTransferFilter,
}) {
  const { all, without, one, two } = filtersProps
  return (
    <>
      <div className={styles.filter} />
      <aside className={styles.aside}>
        <p className={styles.header}>количество пересадок</p>
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="1">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="1"
                checked={all}
                onChange={setAllTicketsFilter}
              />
              <span className={styles['check-box']} />
              Все
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="2">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="2"
                checked={without}
                onChange={setWithoutTransferFilter}
              />
              <span className={styles['check-box']} />
              Без пересадок
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="3">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="3"
                checked={one}
                onChange={setOneTransferFilter}
              />
              <span className={styles['check-box']} />
              Одна пересадка
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="4">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="4"
                checked={two}
                onChange={setTwoTransferFilter}
              />
              <span className={styles['check-box']} />
              Две пересадки
            </label>
          </li>
        </ul>
      </aside>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    filtersProps: store.filter,
  }
}
export default connect(mapStateToProps, filtersActions)(Filters)
