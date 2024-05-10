import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import Notifications from '../notifications'
import Loader from '../loader'
import * as ticketsActions from '../../store/actions/tickets-actions'
import * as commonStateActions from '../../store/actions/common-state-actions'
import logo from '../../assets/Logo.png'

import styles from './App.module.scss'

export default function App() {
  const dispatch = useDispatch()
  let busy = false
  useEffect(() => {
    if (!busy) {
      dispatch(ticketsActions.loadTickets())
    }
    return () => {
      busy = true
    }
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
              dispatch(commonStateActions.setModalState(true))
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
      <Loader />
      <Notifications />
    </div>
  )
}
