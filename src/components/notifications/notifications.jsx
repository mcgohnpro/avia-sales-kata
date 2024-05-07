import PropTypes from 'prop-types'

import Message from './message'
import styles from './notifications.module.scss'

export default function Notification({ errors }) {
  return (
    <div className={styles['wrapper-notiffications']}>
      {errors.map(({ title, message, id }) => {
        return <Message key={id} title={title} message={message} />
      })}
    </div>
  )
}

Notification.defaultProps = {
  errors: [],
}

Notification.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      message: PropTypes.string,
    })
  ),
}
