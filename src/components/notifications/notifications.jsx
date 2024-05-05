/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react'

import closeBtn from '../../assets/close-square-svgrepo-com.svg'

import Message from './message/message'
import styles from './notifications.module.scss'

export default function Notification({ errors }) {
  const styleClassName = useRef(styles.notification)

  return (
    <div className={styles['wrapper-notiffications']}>
      {errors.map(({ title, message, id }) => {
        return <Message key={id} title={title} message={message} />
      })}
    </div>
  )
}
