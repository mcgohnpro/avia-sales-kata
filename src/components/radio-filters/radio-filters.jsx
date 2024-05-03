/* eslint-disable no-unused-vars */
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import styles from './radio-filters.module.scss'

function RadioFilters({ filtersRadio, setCheapest, setFastest, setOptimal }) {
  const { cheapest, fastest, optimal } = filtersRadio
  return (
    <div className={[styles.filters, styles['filters--margin']].join(' ')}>
      <label className={styles.label} htmlFor="cheapest">
        <input type="radio" id="cheapest" name="filters" checked={cheapest} onChange={setCheapest} />
        <span>самый дешевый</span>
      </label>
      <label className={styles.label} htmlFor="fastest">
        <input type="radio" id="fastest" name="filters" checked={fastest} onChange={setFastest} />
        <span>самый быстрый</span>
      </label>
      <label className={styles.label} htmlFor="optimal">
        <input type="radio" id="optimal" name="filters" checked={optimal} onChange={setOptimal} />
        <span>оптимальный</span>
      </label>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filtersRadio: state,
  }
}

export default connect(mapStateToProps, actions)(RadioFilters)
