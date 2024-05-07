import PropTypes from 'prop-types'
import { useState } from 'react'

import styles from './message.module.scss'

export default function Message({ title, message }) {
  const [isClosed, setIsClosed] = useState(false)
  const [styleClassName, setStyleClassName] = useState(styles.notification)

  const closeHandler = () => {
    setStyleClassName([styles.notification, styles['notification--closed']].join(' '))
    setTimeout(() => {
      setIsClosed(true)
    }, 300)
  }
  if (isClosed) return null
  return (
    <div className={styleClassName}>
      <div className={styles.title}>
        <strong>{title}</strong>
        <button onClick={closeHandler} type="button" className={styles['close-btn']} aria-label="close notification">
          <div className={styles['button-image']} />
        </button>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  )
}

Message.defaultProps = {
  title: '',
  message: '',
}

Message.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}
