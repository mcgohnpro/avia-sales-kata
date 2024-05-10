import { useDispatch, useSelector } from 'react-redux'

import * as filterActions from '../../store/actions/filters-actions'

import styles from './radio-filters.module.scss'

export default function RadioFilters() {
  const dispatch = useDispatch()
  const cheapest = useSelector((store) => store.filter.cheapest)
  const fastest = useSelector((store) => store.filter.fastest)

  return (
    <div className={[styles.filters, styles['filters--margin']].join(' ')}>
      <label className={styles.label} htmlFor="cheapest">
        <input
          type="radio"
          id="cheapest"
          name="filters"
          checked={cheapest}
          onChange={() => {
            dispatch(filterActions.setCheapest())
          }}
        />
        <span>самый дешевый</span>
      </label>
      <label className={styles.label} htmlFor="fastest">
        <input
          type="radio"
          id="fastest"
          name="filters"
          checked={fastest}
          onChange={() => {
            dispatch(filterActions.setFastest())
          }}
        />
        <span>самый быстрый</span>
      </label>
    </div>
  )
}
