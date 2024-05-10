import { useDispatch, useSelector } from 'react-redux'

import * as filtersActions from '../../store/actions/filters-actions'
import * as commonStateActions from '../../store/actions/common-state-actions'

import styles from './aside-filters.module.scss'

export default function Filters() {
  const { displayModalTransfers } = useSelector((store) => store.commonState)
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = useSelector(
    (store) => store.filter
  )
  const dispatch = useDispatch()

  return (
    <>
      <div
        className={!displayModalTransfers ? styles.filter : [styles.filter, styles['filter-modal-mode']].join(' ')}
      />
      <aside className={!displayModalTransfers ? styles.aside : [styles.aside, styles['aside-modal-mode']].join(' ')}>
        <p className={styles.header}>количество пересадок</p>
        <button
          onClick={() => {
            dispatch(commonStateActions.setModalState(false))
          }}
          className={styles['close-modal-button']}
          type="button"
          aria-label="close modal window button"
        />
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="allTransfers">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="allTransfers"
                checked={allTransfers}
                onChange={() => {
                  dispatch(filtersActions.setAllTicketsFilter())
                }}
              />
              <span className={styles['check-box']} />
              Все
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="withoutTransfers">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="withoutTransfers"
                checked={withoutTransfers}
                onChange={() => {
                  dispatch(filtersActions.setWithoutTransferFilter())
                }}
              />
              <span className={styles['check-box']} />
              Без пересадок
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="oneTransfer">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="oneTransfer"
                checked={oneTransfer}
                onChange={() => {
                  dispatch(filtersActions.setOneTransferFilter())
                }}
              />
              <span className={styles['check-box']} />
              Одна пересадка
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="twoTransfers">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="twoTransfers"
                checked={twoTransfers}
                onChange={() => {
                  dispatch(filtersActions.setTwoTransferFilter())
                }}
              />
              <span className={styles['check-box']} />
              Две пересадки
            </label>
          </li>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="threeTransfers">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="threeTransfers"
                checked={threeTransfers}
                onChange={() => {
                  dispatch(filtersActions.setThreeTransferFilter())
                }}
              />
              <span className={styles['check-box']} />
              Три пересадки
            </label>
          </li>
        </ul>
      </aside>
    </>
  )
}
