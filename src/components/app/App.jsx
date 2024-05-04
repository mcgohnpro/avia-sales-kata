/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import Loader from '../loader'
import logo from '../../assets/Logo.png'
import useFetch from '../../hooks/useFetch'
import * as ticketsActions from '../../store/actions/tickets-actions'

import styles from './App.module.scss'

function App({ tickets, addTickets }) {
  const { loading, data, fetchNow } = useFetch()
  useEffect(() => {
    addTickets(data.tickets)
  }, [data])
  return (
    <div className={styles.wrapper}>
      <header className={[styles.header, styles['header--margin']].join(' ')}>
        <img className={styles.header__logo} src={logo} alt="logo" />
      </header>
      <main className={styles.main}>
        <Filters />
        <section className={styles['search-results']}>
          <RadioFilters />
          <TicketsList />
          <input className={styles['see-more-button']} type="button" value="Показать еще 5 билетов!" />
        </section>
      </main>
      <Loader loading={loading} />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    tickets: store.tickets,
  }
}

export default connect(mapStateToProps, ticketsActions)(App)
