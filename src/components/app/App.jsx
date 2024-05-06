import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import Notification from '../notifications'
import Loader from '../loader'
import useFetch from '../../hooks/useFetch'
import * as ticketsActions from '../../store/actions/tickets-actions'
import * as filtersActions from '../../store/actions/filters-actions'
import getId from '../../utils/getId'
import logo from '../../assets/Logo.png'

import styles from './App.module.scss'

function App({ addTickets, setModalState }) {
  const [errors, setErrors] = useState([])
  const { loading, data, error } = useFetch()
  useEffect(() => {
    addTickets(data.tickets)
  }, [data])

  useEffect(() => {
    if (error) {
      error.id = getId()
      setErrors((prevState) => {
        return [...prevState, { id: getId(), title: error.name, message: error.message }]
      })
    }
  }, [error])

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
  }
}

export default connect(mapStateToProps, { ...ticketsActions, ...filtersActions })(App)
