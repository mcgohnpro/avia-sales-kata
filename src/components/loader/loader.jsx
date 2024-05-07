import PropTypes from 'prop-types'

import styles from './loader.module.scss'

export default function Loader({ loading }) {
  if (loading) {
    return <span className={styles.loader} />
  }
  return null
}

Loader.defaultProps = {
  loading: false,
}

Loader.propTypes = {
  loading: PropTypes.bool,
}
