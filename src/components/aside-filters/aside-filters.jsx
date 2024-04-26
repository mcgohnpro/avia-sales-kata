/* eslint-disable no-unused-vars */
import styles from './aside-filters.module.scss'

export default function Filters() {
  return (
    <aside>
      <h3>колчество пересадок</h3>
      <ul>
        <li>
          <label htmlFor="1">
            <input type="checkbox" id="1" />
            Все
          </label>
        </li>
        <li>
          <label htmlFor="2">
            <input type="checkbox" id="2" />
            Без пересадок
          </label>
        </li>
        <li>
          <label htmlFor="3">
            <input type="checkbox" id="3" />
            Одна пересадка
          </label>
        </li>
        <li>
          <label htmlFor="4">
            <input type="checkbox" id="4" />
            Две пересадки
          </label>
        </li>
      </ul>
    </aside>
  )
}
