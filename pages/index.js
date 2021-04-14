import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HomeProducts from '../components/home_products'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1>Home Page</h1>
      </main>

      <HomeProducts />

    </div>
  )
}


