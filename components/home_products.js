import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function HomeProducts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <products className={styles.products}>
        <h1> Home Products (Apple Display)</h1>
      </products>

      <Link href="/store_pages/store_product">
        <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}></div>
      </Link>
        

      <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}></div>
      <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}></div>

    </div>
  )
}
