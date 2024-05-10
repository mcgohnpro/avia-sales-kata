import { useSelector } from 'react-redux'

import Message from './message'
import styles from './notifications.module.scss'

export default function Notifications() {
  const { errors } = useSelector((store) => store.commonState)

  return (
    <div className={styles['wrapper-notiffications']}>
      {errors.map(({ title, message, id }) => {
        return <Message key={id} title={title} message={message} />
      })}
    </div>
  )
}
