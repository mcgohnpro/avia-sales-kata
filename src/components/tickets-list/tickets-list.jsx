import { useSelector } from 'react-redux'
import { useMemo, useState } from 'react'

import { toFilterTickets, toSortTickets } from '../../utils/filters'
import { createTicketId } from '../../utils/idGenerators'

import Ticket from './ticket/ticket'
import styles from './tickets-list.module.scss'

export default function TicketsList() {
  const [displayedCountTickets, setDisplayedCountTickets] = useState(5)
  const tickets = useSelector((store) => store.tickets)
  const filter = useSelector((store) => store.filter)
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers, cheapest, fastest } = filter

  const filteredTickets = useMemo(
    () => toFilterTickets(tickets, filter),
    [tickets, allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers]
  )
  const sortedTickets = useMemo(() => toSortTickets(filteredTickets, filter), [filteredTickets, cheapest, fastest])
  if (!sortedTickets.length)
    return <div className={styles['no-data']}>Поиск по заданным параметрам не дал результатов</div>
  return (
    <>
      <ul className={styles['ticket-list']}>
        {sortedTickets.slice(0, displayedCountTickets).map((ticket) => {
          return <Ticket key={createTicketId(ticket)} ticket={ticket} />
        })}
      </ul>
      <input
        className={styles['display-more-tickets']}
        type="button"
        value="Показать еще 5 билетов!"
        onClick={() => {
          setDisplayedCountTickets((prevState) => {
            return prevState + 5
          })
        }}
      />
    </>
  )
}
