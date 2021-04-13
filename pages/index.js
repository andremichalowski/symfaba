import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Nav /> 


      <main className={styles.main}>
        <h1>Home Page</h1>
        
      </main>

      <Footer />
    
    </div>
  )
}


