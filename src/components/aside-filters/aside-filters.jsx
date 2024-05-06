import { connect } from 'react-redux'

import * as filtersActions from '../../store/actions/filters-actions'

import styles from './aside-filters.module.scss'

function Filters({
  filtersProps,
  setAllTicketsFilter,
  setWithoutTransferFilter,
  setOneTransferFilter,
  setTwoTransferFilter,
  setModalState,
}) {
  const { allTransfers, withoutTrasnfers, oneTransfer, twoTransfers, displayModalTransfers } = filtersProps

  return (
    <>
      <div
        className={!displayModalTransfers ? styles.filter : [styles.filter, styles['filter-modal-mode']].join(' ')}
      />
      <aside className={!displayModalTransfers ? styles.aside : [styles.aside, styles['aside-modal-mode']].join(' ')}>
        <p className={styles.header}>количество пересадок</p>
        <button
          onClick={() => {
            setModalState(false)
          }}
          className={styles['close-modal-button']}
          type="button"
          aria-label="close modal window button"
        />
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="1">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="1"
                checked={allTransfers}
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
                checked={withoutTrasnfers}
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
                checked={oneTransfer}
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
                checked={twoTransfers}
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
