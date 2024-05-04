import styles from './loader.module.scss'

export default function Loader({ loading }) {
  if (loading) {
    return <span className={styles.loader} />
  }
  return null
}
