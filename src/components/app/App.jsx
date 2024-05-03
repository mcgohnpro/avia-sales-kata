/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'

import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import logo from '../../assets/Logo.png'
import useFetch from '../../hooks/useFetch'
import reducer from '../../store/reducer'

import styles from './App.module.scss'

const URL_API = 'https://aviasales-test-api.kata.academy/search'

export default function App() {
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
    </div>
  )
}

// рабочий код получения билетов
// const [error, setError] = useState()
// const [tickets, setTickets] = useState([])
// useEffect(() => {
//   const url = new URL(URL_API)
//   url.pathname = 'search'
//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json()
//       }
//       throw response
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .then(({ searchId }) => {
//       url.pathname = 'tickets'
//       url.searchParams.set('searchId', searchId)
//       return fetch(url).then((response) => {
//         if (response.ok) {
//           return response.json()
//         }
//         throw response
//       })
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .then((json) => {
//       setTickets(json.tickets)
//     })
// }, [])
