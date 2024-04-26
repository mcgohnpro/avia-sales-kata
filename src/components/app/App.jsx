import './App.css'
import Filters from '../aside-filters'
import RadioFilters from '../radio-filters'

export default function App() {
  return (
    <>
      <header>
        <img src="" alt="logo" />
      </header>
      <main>
        <Filters />
        <section className="search-results">
          <RadioFilters />
        </section>
      </main>
    </>
  )
}
