import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Product() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <product className={styles.product}>
        <h1>Product</h1>
      </product>

      <footer className={styles.footer}>
        <h1> Test footer </h1>
      </footer>
    </div>
  )
}
