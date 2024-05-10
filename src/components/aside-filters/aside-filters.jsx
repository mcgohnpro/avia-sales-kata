import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as filtersActions from '../../store/actions/filters-actions'
import * as commonStateActions from '../../store/actions/common-state-actions'

import styles from './aside-filters.module.scss'

function Filters({
  filtersProps,
  commonStateProps,
  setAllTicketsFilter,
  setWithoutTransferFilter,
  setOneTransferFilter,
  setTwoTransferFilter,
  setThreeTransferFilter,
  setModalState,
}) {
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = filtersProps
  const { displayModalTransfers } = commonStateProps

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
        {/* TODO переименовать id в нормальный вид */}
        <ul className={styles.list}>
          <li className={styles['list-item']}>
            <label className={styles.label} htmlFor="allTransfers">
              <input
                className={styles['check-input']}
                type="checkbox"
                id="allTransfers"
                checked={allTransfers}
                onChange={setAllTicketsFilter}
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
                onChange={setWithoutTransferFilter}
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
                onChange={setOneTransferFilter}
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
                onChange={setTwoTransferFilter}
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
                onChange={setThreeTransferFilter}
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

const mapStateToProps = (store) => {
  return {
    filtersProps: store.filter,
    commonStateProps: store.commonState,
  }
}
export default connect(mapStateToProps, { ...filtersActions, ...commonStateActions })(Filters)

Filters.defaultProps = {
  filtersProps: {
    allTransfers: true,
    withoutTransfers: true,
    oneTransfer: true,
    twoTransfers: true,
    threeTransfers: true,
    displayModalTransfers: false,
  },
  setAllTicketsFilter: () => {},
  setWithoutTransferFilter: () => {},
  setOneTransferFilter: () => {},
  setTwoTransferFilter: () => {},
  setThreeTransferFilter: () => {},
  setModalState: () => {},
}

Filters.propTypes = {
  filtersProps: PropTypes.shape({
    allTransfers: PropTypes.bool,
    withoutTransfers: PropTypes.bool,
    oneTransfer: PropTypes.bool,
    twoTransfers: PropTypes.bool,
    threeTransfers: PropTypes.bool,
    displayModalTransfers: PropTypes.bool,
  }),
  setAllTicketsFilter: PropTypes.func,
  setWithoutTransferFilter: PropTypes.func,
  setOneTransferFilter: PropTypes.func,
  setTwoTransferFilter: PropTypes.func,
  setThreeTransferFilter: PropTypes.func,
  setModalState: PropTypes.func,
}
