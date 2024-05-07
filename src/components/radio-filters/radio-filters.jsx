import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as filterActions from '../../store/actions/filters-actions'

import styles from './radio-filters.module.scss'

function RadioFilters({ filtersRadio, setCheapest, setFastest }) {
  const { cheapest, fastest } = filtersRadio
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
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    filtersRadio: store.filter,
  }
}

export default connect(mapStateToProps, filterActions)(RadioFilters)

RadioFilters.defaultProps = {
  filtersRadio: {
    cheapest: false,
    fastest: false,
  },
  setCheapest: () => {},
  setFastest: () => {},
}

RadioFilters.propTypes = {
  filtersRadio: PropTypes.shape({
    cheapest: PropTypes.bool,
    fastest: PropTypes.bool,
  }),
  setCheapest: PropTypes.func,
  setFastest: PropTypes.func,
}
