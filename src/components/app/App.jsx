import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'
import TicketsList from '../tickets-list'
import logo from '../../assets/Logo.png'

import styles from './App.module.scss'

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
