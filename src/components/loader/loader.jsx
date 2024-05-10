import { useSelector } from 'react-redux'

import styles from './loader.module.scss'

export default function Loader() {
  const { loading } = useSelector((store) => store.commonState)
  if (loading) {
    return <span className={styles.loader} />
  }
  return null
}
