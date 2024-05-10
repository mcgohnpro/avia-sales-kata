import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import Notification from '../notifications'
import Loader from '../loader'
import * as ticketsActions from '../../store/actions/tickets-actions'
import * as filtersActions from '../../store/actions/filters-actions'
import * as commonStateActions from '../../store/actions/common-state-actions'
import logo from '../../assets/Logo.png'

import styles from './App.module.scss'

function App({ loadTickets, setModalState, commonState }) {
  const { loading, errors } = commonState

  useEffect(() => {
    loadTickets()
  }, [])

  return (
    <div className={styles.wrapper}>
      <header className={[styles.header, styles['header--margin']].join(' ')}>
        <img className={styles.header__logo} src={logo} alt="logo" />
      </header>

      <main className={styles.main}>
        <Filters />
        <section className={styles['search-results']}>
          <RadioFilters />
          <button
            type="button"
            className={styles['display-modal-button']}
            onClick={() => {
              setModalState(true)
            }}
          >
            <div className={styles['content-button-wrapper']}>
              <span>Пересадки</span>
              <div className={styles['button-arrow']} />
            </div>
          </button>
          <TicketsList />
        </section>
      </main>
      <Loader loading={loading} />
      <Notification errors={errors} />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    tickets: store.tickets,
    filter: store.filter,
    commonState: store.commonState,
  }
}

export default connect(mapStateToProps, { ...ticketsActions, ...filtersActions, ...commonStateActions })(App)

App.defaultProps = {
  loadTickets: () => {},
  setModalState: () => {},
  commonState: {
    loading: false,
    errors: [],
  },
}

App.propTypes = {
  loadTickets: PropTypes.func,
  setModalState: PropTypes.func,
  commonState: PropTypes.shape({
    loading: PropTypes.bool,
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        message: PropTypes.string,
      })
    ),
  }),
}
