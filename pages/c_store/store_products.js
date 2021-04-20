import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Products() {
  return (
    <div className={styles.container}>
      
      <products className={styles.products}>
        <h1>Store Products</h1>
      </products>

    </div>
  )
}
