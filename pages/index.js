import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HomeProducts from '../components/home_products'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,200&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className={styles.main}>
        <h1>Showroom</h1>
      </main>

      <HomeProducts />

    </div>
  )
}


