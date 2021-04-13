import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <products className={styles.products}>
        <h1>Products</h1>
      </products>

      <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}>
        
      </div>

      <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}></div>
      <div style={{"border": "3px black solid", "height": "100px", "width": "100px", "margin": "10px"}}></div>

    </div>
  )
}
