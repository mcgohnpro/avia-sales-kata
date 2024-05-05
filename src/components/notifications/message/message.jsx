/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect, useRef } from 'react'

import backgroundCloseButton from '../../../assets/close-square-svgrepo-com.svg'

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
          <div className={styles['button-image']} style={{ backgroundImage: `url(${backgroundCloseButton})` }} />
        </button>
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  )
}
